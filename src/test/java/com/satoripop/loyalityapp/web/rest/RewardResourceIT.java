package com.satoripop.loyalityapp.web.rest;

import static com.satoripop.loyalityapp.domain.RewardAsserts.*;
import static com.satoripop.loyalityapp.web.rest.TestUtil.createUpdateProxyForBean;
import static com.satoripop.loyalityapp.web.rest.TestUtil.sameInstant;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.satoripop.loyalityapp.IntegrationTest;
import com.satoripop.loyalityapp.domain.Reward;
import com.satoripop.loyalityapp.domain.User;
import com.satoripop.loyalityapp.repository.RewardRepository;
import com.satoripop.loyalityapp.repository.UserRepository;
import com.satoripop.loyalityapp.service.dto.RewardDTO;
import com.satoripop.loyalityapp.service.mapper.RewardMapper;
import jakarta.persistence.EntityManager;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
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
 * Integration tests for the {@link RewardResource} REST controller.
 */
@IntegrationTest
@AutoConfigureMockMvc
@WithMockUser
class RewardResourceIT {

    private static final ZonedDateTime DEFAULT_CREATED_AT = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_CREATED_AT = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final ZonedDateTime DEFAULT_FROM_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_FROM_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final ZonedDateTime DEFAULT_TO_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_TO_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final String DEFAULT_CODE = "AAAAAAAAAA";
    private static final String UPDATED_CODE = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/rewards";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private RewardRepository rewardRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RewardMapper rewardMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restRewardMockMvc;

    private Reward reward;

    private Reward insertedReward;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Reward createEntity(EntityManager em) {
        Reward reward = new Reward().createdAt(DEFAULT_CREATED_AT).fromDate(DEFAULT_FROM_DATE).toDate(DEFAULT_TO_DATE).code(DEFAULT_CODE);
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        reward.setUser(user);
        return reward;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Reward createUpdatedEntity(EntityManager em) {
        Reward reward = new Reward().createdAt(UPDATED_CREATED_AT).fromDate(UPDATED_FROM_DATE).toDate(UPDATED_TO_DATE).code(UPDATED_CODE);
        // Add required entity
        User user = UserResourceIT.createEntity(em);
        em.persist(user);
        em.flush();
        reward.setUser(user);
        return reward;
    }

    @BeforeEach
    public void initTest() {
        reward = createEntity(em);
    }

    @AfterEach
    public void cleanup() {
        if (insertedReward != null) {
            rewardRepository.delete(insertedReward);
            insertedReward = null;
        }
        userRepository.deleteAll();
    }

    @Test
    @Transactional
    void createReward() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Reward
        RewardDTO rewardDTO = rewardMapper.toDto(reward);
        var returnedRewardDTO = om.readValue(
            restRewardMockMvc
                .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardDTO)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            RewardDTO.class
        );

        // Validate the Reward in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        var returnedReward = rewardMapper.toEntity(returnedRewardDTO);
        assertRewardUpdatableFieldsEquals(returnedReward, getPersistedReward(returnedReward));

        insertedReward = returnedReward;
    }

    @Test
    @Transactional
    void createRewardWithExistingId() throws Exception {
        // Create the Reward with an existing ID
        reward.setId(1L);
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restRewardMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Reward in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkCreatedAtIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        reward.setCreatedAt(null);

        // Create the Reward, which fails.
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        restRewardMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardDTO)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkFromDateIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        reward.setFromDate(null);

        // Create the Reward, which fails.
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        restRewardMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardDTO)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkToDateIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        reward.setToDate(null);

        // Create the Reward, which fails.
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        restRewardMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardDTO)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkCodeIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        reward.setCode(null);

        // Create the Reward, which fails.
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        restRewardMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardDTO)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllRewards() throws Exception {
        // Initialize the database
        insertedReward = rewardRepository.saveAndFlush(reward);

        // Get all the rewardList
        restRewardMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(reward.getId().intValue())))
            .andExpect(jsonPath("$.[*].createdAt").value(hasItem(sameInstant(DEFAULT_CREATED_AT))))
            .andExpect(jsonPath("$.[*].fromDate").value(hasItem(sameInstant(DEFAULT_FROM_DATE))))
            .andExpect(jsonPath("$.[*].toDate").value(hasItem(sameInstant(DEFAULT_TO_DATE))))
            .andExpect(jsonPath("$.[*].code").value(hasItem(DEFAULT_CODE)));
    }

    @Test
    @Transactional
    void getReward() throws Exception {
        // Initialize the database
        insertedReward = rewardRepository.saveAndFlush(reward);

        // Get the reward
        restRewardMockMvc
            .perform(get(ENTITY_API_URL_ID, reward.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(reward.getId().intValue()))
            .andExpect(jsonPath("$.createdAt").value(sameInstant(DEFAULT_CREATED_AT)))
            .andExpect(jsonPath("$.fromDate").value(sameInstant(DEFAULT_FROM_DATE)))
            .andExpect(jsonPath("$.toDate").value(sameInstant(DEFAULT_TO_DATE)))
            .andExpect(jsonPath("$.code").value(DEFAULT_CODE));
    }

    @Test
    @Transactional
    void getNonExistingReward() throws Exception {
        // Get the reward
        restRewardMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingReward() throws Exception {
        // Initialize the database
        insertedReward = rewardRepository.saveAndFlush(reward);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the reward
        Reward updatedReward = rewardRepository.findById(reward.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedReward are not directly saved in db
        em.detach(updatedReward);
        updatedReward.createdAt(UPDATED_CREATED_AT).fromDate(UPDATED_FROM_DATE).toDate(UPDATED_TO_DATE).code(UPDATED_CODE);
        RewardDTO rewardDTO = rewardMapper.toDto(updatedReward);

        restRewardMockMvc
            .perform(
                put(ENTITY_API_URL_ID, rewardDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(rewardDTO))
            )
            .andExpect(status().isOk());

        // Validate the Reward in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedRewardToMatchAllProperties(updatedReward);
    }

    @Test
    @Transactional
    void putNonExistingReward() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        reward.setId(longCount.incrementAndGet());

        // Create the Reward
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restRewardMockMvc
            .perform(
                put(ENTITY_API_URL_ID, rewardDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(rewardDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the Reward in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchReward() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        reward.setId(longCount.incrementAndGet());

        // Create the Reward
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restRewardMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(rewardDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the Reward in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamReward() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        reward.setId(longCount.incrementAndGet());

        // Create the Reward
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restRewardMockMvc
            .perform(put(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardDTO)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Reward in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateRewardWithPatch() throws Exception {
        // Initialize the database
        insertedReward = rewardRepository.saveAndFlush(reward);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the reward using partial update
        Reward partialUpdatedReward = new Reward();
        partialUpdatedReward.setId(reward.getId());

        partialUpdatedReward.createdAt(UPDATED_CREATED_AT).fromDate(UPDATED_FROM_DATE).code(UPDATED_CODE);

        restRewardMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedReward.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedReward))
            )
            .andExpect(status().isOk());

        // Validate the Reward in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertRewardUpdatableFieldsEquals(createUpdateProxyForBean(partialUpdatedReward, reward), getPersistedReward(reward));
    }

    @Test
    @Transactional
    void fullUpdateRewardWithPatch() throws Exception {
        // Initialize the database
        insertedReward = rewardRepository.saveAndFlush(reward);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the reward using partial update
        Reward partialUpdatedReward = new Reward();
        partialUpdatedReward.setId(reward.getId());

        partialUpdatedReward.createdAt(UPDATED_CREATED_AT).fromDate(UPDATED_FROM_DATE).toDate(UPDATED_TO_DATE).code(UPDATED_CODE);

        restRewardMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedReward.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedReward))
            )
            .andExpect(status().isOk());

        // Validate the Reward in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertRewardUpdatableFieldsEquals(partialUpdatedReward, getPersistedReward(partialUpdatedReward));
    }

    @Test
    @Transactional
    void patchNonExistingReward() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        reward.setId(longCount.incrementAndGet());

        // Create the Reward
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restRewardMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, rewardDTO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(rewardDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the Reward in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchReward() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        reward.setId(longCount.incrementAndGet());

        // Create the Reward
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restRewardMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(rewardDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the Reward in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamReward() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        reward.setId(longCount.incrementAndGet());

        // Create the Reward
        RewardDTO rewardDTO = rewardMapper.toDto(reward);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restRewardMockMvc
            .perform(
                patch(ENTITY_API_URL).with(csrf()).contentType("application/merge-patch+json").content(om.writeValueAsBytes(rewardDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the Reward in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteReward() throws Exception {
        // Initialize the database
        insertedReward = rewardRepository.saveAndFlush(reward);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the reward
        restRewardMockMvc
            .perform(delete(ENTITY_API_URL_ID, reward.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return rewardRepository.count();
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

    protected Reward getPersistedReward(Reward reward) {
        return rewardRepository.findById(reward.getId()).orElseThrow();
    }

    protected void assertPersistedRewardToMatchAllProperties(Reward expectedReward) {
        assertRewardAllPropertiesEquals(expectedReward, getPersistedReward(expectedReward));
    }

    protected void assertPersistedRewardToMatchUpdatableProperties(Reward expectedReward) {
        assertRewardAllUpdatablePropertiesEquals(expectedReward, getPersistedReward(expectedReward));
    }
}
