package com.satoripop.loyalityapp.web.rest;

import static com.satoripop.loyalityapp.domain.LoyaltyLevelAsserts.*;
import static com.satoripop.loyalityapp.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.satoripop.loyalityapp.IntegrationTest;
import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import com.satoripop.loyalityapp.domain.enumeration.LoyaltyType;
import com.satoripop.loyalityapp.repository.LoyaltyLevelRepository;
import com.satoripop.loyalityapp.service.dto.LoyaltyLevelDTO;
import com.satoripop.loyalityapp.service.mapper.LoyaltyLevelMapper;
import jakarta.persistence.EntityManager;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
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
 * Integration tests for the {@link LoyaltyLevelResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class LoyaltyLevelResourceIT {

    private static final LoyaltyType DEFAULT_TITLE = LoyaltyType.DIAMOND;
    private static final LoyaltyType UPDATED_TITLE = LoyaltyType.GOLD;

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final Long DEFAULT_MIN_BALANCE = 1L;
    private static final Long UPDATED_MIN_BALANCE = 2L;

    private static final Long DEFAULT_MAX_BALANCE = 1L;
    private static final Long UPDATED_MAX_BALANCE = 2L;

    private static final String ENTITY_API_URL = "/api/loyalty-levels";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private LoyaltyLevelRepository loyaltyLevelRepository;

    @Autowired
    private LoyaltyLevelMapper loyaltyLevelMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restLoyaltyLevelMockMvc;

    private LoyaltyLevel loyaltyLevel;

    private LoyaltyLevel insertedLoyaltyLevel;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static LoyaltyLevel createEntity(EntityManager em) {
        LoyaltyLevel loyaltyLevel = new LoyaltyLevel()
            .title(DEFAULT_TITLE)
            .description(DEFAULT_DESCRIPTION)
            .minBalance(DEFAULT_MIN_BALANCE)
            .maxBalance(DEFAULT_MAX_BALANCE);
        return loyaltyLevel;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static LoyaltyLevel createUpdatedEntity(EntityManager em) {
        LoyaltyLevel loyaltyLevel = new LoyaltyLevel()
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .minBalance(UPDATED_MIN_BALANCE)
            .maxBalance(UPDATED_MAX_BALANCE);
        return loyaltyLevel;
    }

    @BeforeEach
    public void initTest() {
        loyaltyLevel = createEntity(em);
    }

    @AfterEach
    public void cleanup() {
        if (insertedLoyaltyLevel != null) {
            loyaltyLevelRepository.delete(insertedLoyaltyLevel);
            insertedLoyaltyLevel = null;
        }
    }

    @Test
    @Transactional
    void createLoyaltyLevel() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the LoyaltyLevel
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);
        var returnedLoyaltyLevelDTO = om.readValue(
            restLoyaltyLevelMockMvc
                .perform(
                    post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(loyaltyLevelDTO))
                )
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            LoyaltyLevelDTO.class
        );

        // Validate the LoyaltyLevel in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        var returnedLoyaltyLevel = loyaltyLevelMapper.toEntity(returnedLoyaltyLevelDTO);
        assertLoyaltyLevelUpdatableFieldsEquals(returnedLoyaltyLevel, getPersistedLoyaltyLevel(returnedLoyaltyLevel));

        insertedLoyaltyLevel = returnedLoyaltyLevel;
    }

    @Test
    @Transactional
    void createLoyaltyLevelWithExistingId() throws Exception {
        // Create the LoyaltyLevel with an existing ID
        loyaltyLevel.setId(1L);
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restLoyaltyLevelMockMvc
            .perform(
                post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the LoyaltyLevel in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkMinBalanceIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        loyaltyLevel.setMinBalance(null);

        // Create the LoyaltyLevel, which fails.
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        restLoyaltyLevelMockMvc
            .perform(
                post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkMaxBalanceIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        loyaltyLevel.setMaxBalance(null);

        // Create the LoyaltyLevel, which fails.
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        restLoyaltyLevelMockMvc
            .perform(
                post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllLoyaltyLevels() throws Exception {
        // Initialize the database
        insertedLoyaltyLevel = loyaltyLevelRepository.saveAndFlush(loyaltyLevel);

        // Get all the loyaltyLevelList
        restLoyaltyLevelMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(loyaltyLevel.getId().intValue())))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)))
            .andExpect(jsonPath("$.[*].minBalance").value(hasItem(DEFAULT_MIN_BALANCE.intValue())))
            .andExpect(jsonPath("$.[*].maxBalance").value(hasItem(DEFAULT_MAX_BALANCE.intValue())));
    }

    @Test
    @Transactional
    void getLoyaltyLevel() throws Exception {
        // Initialize the database
        insertedLoyaltyLevel = loyaltyLevelRepository.saveAndFlush(loyaltyLevel);

        // Get the loyaltyLevel
        restLoyaltyLevelMockMvc
            .perform(get(ENTITY_API_URL_ID, loyaltyLevel.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(loyaltyLevel.getId().intValue()))
            .andExpect(jsonPath("$.title").value(DEFAULT_TITLE.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION))
            .andExpect(jsonPath("$.minBalance").value(DEFAULT_MIN_BALANCE.intValue()))
            .andExpect(jsonPath("$.maxBalance").value(DEFAULT_MAX_BALANCE.intValue()));
    }

    @Test
    @Transactional
    void getNonExistingLoyaltyLevel() throws Exception {
        // Get the loyaltyLevel
        restLoyaltyLevelMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingLoyaltyLevel() throws Exception {
        // Initialize the database
        insertedLoyaltyLevel = loyaltyLevelRepository.saveAndFlush(loyaltyLevel);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the loyaltyLevel
        LoyaltyLevel updatedLoyaltyLevel = loyaltyLevelRepository.findById(loyaltyLevel.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedLoyaltyLevel are not directly saved in db
        em.detach(updatedLoyaltyLevel);
        updatedLoyaltyLevel
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .minBalance(UPDATED_MIN_BALANCE)
            .maxBalance(UPDATED_MAX_BALANCE);
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(updatedLoyaltyLevel);

        restLoyaltyLevelMockMvc
            .perform(
                put(ENTITY_API_URL_ID, loyaltyLevelDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isOk());

        // Validate the LoyaltyLevel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedLoyaltyLevelToMatchAllProperties(updatedLoyaltyLevel);
    }

    @Test
    @Transactional
    void putNonExistingLoyaltyLevel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        loyaltyLevel.setId(longCount.incrementAndGet());

        // Create the LoyaltyLevel
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restLoyaltyLevelMockMvc
            .perform(
                put(ENTITY_API_URL_ID, loyaltyLevelDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the LoyaltyLevel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchLoyaltyLevel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        loyaltyLevel.setId(longCount.incrementAndGet());

        // Create the LoyaltyLevel
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restLoyaltyLevelMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the LoyaltyLevel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamLoyaltyLevel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        loyaltyLevel.setId(longCount.incrementAndGet());

        // Create the LoyaltyLevel
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restLoyaltyLevelMockMvc
            .perform(
                put(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the LoyaltyLevel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateLoyaltyLevelWithPatch() throws Exception {
        // Initialize the database
        insertedLoyaltyLevel = loyaltyLevelRepository.saveAndFlush(loyaltyLevel);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the loyaltyLevel using partial update
        LoyaltyLevel partialUpdatedLoyaltyLevel = new LoyaltyLevel();
        partialUpdatedLoyaltyLevel.setId(loyaltyLevel.getId());

        partialUpdatedLoyaltyLevel.title(UPDATED_TITLE);

        restLoyaltyLevelMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedLoyaltyLevel.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedLoyaltyLevel))
            )
            .andExpect(status().isOk());

        // Validate the LoyaltyLevel in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertLoyaltyLevelUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedLoyaltyLevel, loyaltyLevel),
            getPersistedLoyaltyLevel(loyaltyLevel)
        );
    }

    @Test
    @Transactional
    void fullUpdateLoyaltyLevelWithPatch() throws Exception {
        // Initialize the database
        insertedLoyaltyLevel = loyaltyLevelRepository.saveAndFlush(loyaltyLevel);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the loyaltyLevel using partial update
        LoyaltyLevel partialUpdatedLoyaltyLevel = new LoyaltyLevel();
        partialUpdatedLoyaltyLevel.setId(loyaltyLevel.getId());

        partialUpdatedLoyaltyLevel
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .minBalance(UPDATED_MIN_BALANCE)
            .maxBalance(UPDATED_MAX_BALANCE);

        restLoyaltyLevelMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedLoyaltyLevel.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedLoyaltyLevel))
            )
            .andExpect(status().isOk());

        // Validate the LoyaltyLevel in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertLoyaltyLevelUpdatableFieldsEquals(partialUpdatedLoyaltyLevel, getPersistedLoyaltyLevel(partialUpdatedLoyaltyLevel));
    }

    @Test
    @Transactional
    void patchNonExistingLoyaltyLevel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        loyaltyLevel.setId(longCount.incrementAndGet());

        // Create the LoyaltyLevel
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restLoyaltyLevelMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, loyaltyLevelDTO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the LoyaltyLevel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchLoyaltyLevel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        loyaltyLevel.setId(longCount.incrementAndGet());

        // Create the LoyaltyLevel
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restLoyaltyLevelMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the LoyaltyLevel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamLoyaltyLevel() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        loyaltyLevel.setId(longCount.incrementAndGet());

        // Create the LoyaltyLevel
        LoyaltyLevelDTO loyaltyLevelDTO = loyaltyLevelMapper.toDto(loyaltyLevel);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restLoyaltyLevelMockMvc
            .perform(
                patch(ENTITY_API_URL)
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(loyaltyLevelDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the LoyaltyLevel in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteLoyaltyLevel() throws Exception {
        // Initialize the database
        insertedLoyaltyLevel = loyaltyLevelRepository.saveAndFlush(loyaltyLevel);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the loyaltyLevel
        restLoyaltyLevelMockMvc
            .perform(delete(ENTITY_API_URL_ID, loyaltyLevel.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return loyaltyLevelRepository.count();
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

    protected LoyaltyLevel getPersistedLoyaltyLevel(LoyaltyLevel loyaltyLevel) {
        return loyaltyLevelRepository.findById(loyaltyLevel.getId()).orElseThrow();
    }

    protected void assertPersistedLoyaltyLevelToMatchAllProperties(LoyaltyLevel expectedLoyaltyLevel) {
        assertLoyaltyLevelAllPropertiesEquals(expectedLoyaltyLevel, getPersistedLoyaltyLevel(expectedLoyaltyLevel));
    }

    protected void assertPersistedLoyaltyLevelToMatchUpdatableProperties(LoyaltyLevel expectedLoyaltyLevel) {
        assertLoyaltyLevelAllUpdatablePropertiesEquals(expectedLoyaltyLevel, getPersistedLoyaltyLevel(expectedLoyaltyLevel));
    }
}
