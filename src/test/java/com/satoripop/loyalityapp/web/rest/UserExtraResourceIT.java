package com.satoripop.loyalityapp.web.rest;

import static com.satoripop.loyalityapp.domain.UserExtraAsserts.*;
import static com.satoripop.loyalityapp.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.satoripop.loyalityapp.IntegrationTest;
import com.satoripop.loyalityapp.domain.User;
import com.satoripop.loyalityapp.domain.UserExtra;
import com.satoripop.loyalityapp.repository.UserExtraRepository;
import com.satoripop.loyalityapp.repository.UserRepository;
import jakarta.persistence.EntityManager;
import java.util.UUID;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link UserExtraResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class UserExtraResourceIT {

    private static final Long DEFAULT_TOTAL_BALANCE = 1L;
    private static final Long UPDATED_TOTAL_BALANCE = 2L;

    private static final Long DEFAULT_ACTUAL_BALANCE = 1L;
    private static final Long UPDATED_ACTUAL_BALANCE = 2L;

    private static final String ENTITY_API_URL = "/api/user-extras";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    @Autowired
    private ObjectMapper om;

    @Autowired
    private UserExtraRepository userExtraRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restUserExtraMockMvc;

    private UserExtra userExtra;

    private UserExtra insertedUserExtra;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserExtra createEntity(EntityManager em) {
        UserExtra userExtra = new UserExtra().totalBalance(DEFAULT_TOTAL_BALANCE).actualBalance(DEFAULT_ACTUAL_BALANCE);
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        userExtra.setUser(user);
        return userExtra;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static UserExtra createUpdatedEntity(EntityManager em) {
        UserExtra userExtra = new UserExtra().totalBalance(UPDATED_TOTAL_BALANCE).actualBalance(UPDATED_ACTUAL_BALANCE);
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        userExtra.setUser(user);
        return userExtra;
    }

    @BeforeEach
    public void initTest() {
        userExtra = createEntity(em);
    }

    @AfterEach
    public void cleanup() {
        if (insertedUserExtra != null) {
            userExtraRepository.delete(insertedUserExtra);
            insertedUserExtra = null;
        }
        userRepository.deleteAll();
    }

    @Test
    @Transactional
    void createUserExtra() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the UserExtra
        var returnedUserExtra = om.readValue(
            restUserExtraMockMvc
                .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(userExtra)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            UserExtra.class
        );

        // Validate the UserExtra in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertUserExtraUpdatableFieldsEquals(returnedUserExtra, getPersistedUserExtra(returnedUserExtra));

        insertedUserExtra = returnedUserExtra;
    }

    @Test
    @Transactional
    void createUserExtraWithExistingId() throws Exception {
        // Create the UserExtra with an existing ID
        userExtra.setId("existing_id");

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restUserExtraMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(userExtra)))
            .andExpect(status().isBadRequest());

        // Validate the UserExtra in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkTotalBalanceIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        userExtra.setTotalBalance(null);

        // Create the UserExtra, which fails.

        restUserExtraMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(userExtra)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkActualBalanceIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        userExtra.setActualBalance(null);

        // Create the UserExtra, which fails.

        restUserExtraMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(userExtra)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllUserExtras() throws Exception {
        // Initialize the database
        insertedUserExtra = userExtraRepository.saveAndFlush(userExtra);

        // Get all the userExtraList
        restUserExtraMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(userExtra.getId())))
            .andExpect(jsonPath("$.[*].totalBalance").value(hasItem(DEFAULT_TOTAL_BALANCE.intValue())))
            .andExpect(jsonPath("$.[*].actualBalance").value(hasItem(DEFAULT_ACTUAL_BALANCE.intValue())));
    }

    @Test
    @Transactional
    void getUserExtra() throws Exception {
        // Initialize the database
        insertedUserExtra = userExtraRepository.saveAndFlush(userExtra);

        // Get the userExtra
        restUserExtraMockMvc
            .perform(get(ENTITY_API_URL_ID, userExtra.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(userExtra.getId()))
            .andExpect(jsonPath("$.totalBalance").value(DEFAULT_TOTAL_BALANCE.intValue()))
            .andExpect(jsonPath("$.actualBalance").value(DEFAULT_ACTUAL_BALANCE.intValue()));
    }

    @Test
    @Transactional
    void getNonExistingUserExtra() throws Exception {
        // Get the userExtra
        restUserExtraMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingUserExtra() throws Exception {
        // Initialize the database
        insertedUserExtra = userExtraRepository.saveAndFlush(userExtra);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the userExtra
        UserExtra updatedUserExtra = userExtraRepository.findById(userExtra.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedUserExtra are not directly saved in db
        em.detach(updatedUserExtra);
        updatedUserExtra.totalBalance(UPDATED_TOTAL_BALANCE).actualBalance(UPDATED_ACTUAL_BALANCE);

        restUserExtraMockMvc
            .perform(
                put(ENTITY_API_URL_ID, updatedUserExtra.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(updatedUserExtra))
            )
            .andExpect(status().isOk());

        // Validate the UserExtra in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedUserExtraToMatchAllProperties(updatedUserExtra);
    }

    @Test
    @Transactional
    void putNonExistingUserExtra() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        userExtra.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restUserExtraMockMvc
            .perform(
                put(ENTITY_API_URL_ID, userExtra.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(userExtra))
            )
            .andExpect(status().isBadRequest());

        // Validate the UserExtra in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchUserExtra() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        userExtra.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restUserExtraMockMvc
            .perform(
                put(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(userExtra))
            )
            .andExpect(status().isBadRequest());

        // Validate the UserExtra in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamUserExtra() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        userExtra.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restUserExtraMockMvc
            .perform(put(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(userExtra)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the UserExtra in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateUserExtraWithPatch() throws Exception {
        // Initialize the database
        insertedUserExtra = userExtraRepository.saveAndFlush(userExtra);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the userExtra using partial update
        UserExtra partialUpdatedUserExtra = new UserExtra();
        partialUpdatedUserExtra.setId(userExtra.getId());

        partialUpdatedUserExtra.totalBalance(UPDATED_TOTAL_BALANCE);

        restUserExtraMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedUserExtra.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedUserExtra))
            )
            .andExpect(status().isOk());

        // Validate the UserExtra in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertUserExtraUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedUserExtra, userExtra),
            getPersistedUserExtra(userExtra)
        );
    }

    @Test
    @Transactional
    void fullUpdateUserExtraWithPatch() throws Exception {
        // Initialize the database
        insertedUserExtra = userExtraRepository.saveAndFlush(userExtra);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the userExtra using partial update
        UserExtra partialUpdatedUserExtra = new UserExtra();
        partialUpdatedUserExtra.setId(userExtra.getId());

        partialUpdatedUserExtra.totalBalance(UPDATED_TOTAL_BALANCE).actualBalance(UPDATED_ACTUAL_BALANCE);

        restUserExtraMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedUserExtra.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedUserExtra))
            )
            .andExpect(status().isOk());

        // Validate the UserExtra in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertUserExtraUpdatableFieldsEquals(partialUpdatedUserExtra, getPersistedUserExtra(partialUpdatedUserExtra));
    }

    @Test
    @Transactional
    void patchNonExistingUserExtra() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        userExtra.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restUserExtraMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, userExtra.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(userExtra))
            )
            .andExpect(status().isBadRequest());

        // Validate the UserExtra in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchUserExtra() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        userExtra.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restUserExtraMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, UUID.randomUUID().toString())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(userExtra))
            )
            .andExpect(status().isBadRequest());

        // Validate the UserExtra in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamUserExtra() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        userExtra.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restUserExtraMockMvc
            .perform(
                patch(ENTITY_API_URL).with(csrf()).contentType("application/merge-patch+json").content(om.writeValueAsBytes(userExtra))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the UserExtra in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteUserExtra() throws Exception {
        // Initialize the database
        insertedUserExtra = userExtraRepository.saveAndFlush(userExtra);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the userExtra
        restUserExtraMockMvc
            .perform(delete(ENTITY_API_URL_ID, userExtra.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return userExtraRepository.count();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected UserExtra getPersistedUserExtra(UserExtra userExtra) {
        return userExtraRepository.findById(userExtra.getId()).orElseThrow();
    }

    protected void assertPersistedUserExtraToMatchAllProperties(UserExtra expectedUserExtra) {
        assertUserExtraAllPropertiesEquals(expectedUserExtra, getPersistedUserExtra(expectedUserExtra));
    }

    protected void assertPersistedUserExtraToMatchUpdatableProperties(UserExtra expectedUserExtra) {
        assertUserExtraAllUpdatablePropertiesEquals(expectedUserExtra, getPersistedUserExtra(expectedUserExtra));
    }
}
