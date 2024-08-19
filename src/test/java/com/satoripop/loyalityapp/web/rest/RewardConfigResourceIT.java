package com.satoripop.loyalityapp.web.rest;

import static com.satoripop.loyalityapp.domain.RewardConfigAsserts.*;
import static com.satoripop.loyalityapp.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.satoripop.loyalityapp.IntegrationTest;
import com.satoripop.loyalityapp.domain.RewardConfig;
import com.satoripop.loyalityapp.domain.enumeration.RewardType;
import com.satoripop.loyalityapp.repository.RewardConfigRepository;
import com.satoripop.loyalityapp.service.RewardConfigService;
import com.satoripop.loyalityapp.service.dto.RewardConfigDTO;
import com.satoripop.loyalityapp.service.mapper.RewardConfigMapper;
import jakarta.persistence.EntityManager;
import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link RewardConfigResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class RewardConfigResourceIT {

    private static final RewardType DEFAULT_TITLE = RewardType.DISCOUNT;
    private static final RewardType UPDATED_TITLE = RewardType.DONATION;

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final Integer DEFAULT_BALANCE_VALUE = 1;
    private static final Integer UPDATED_BALANCE_VALUE = 2;

    private static final Float DEFAULT_CONVERTED_VALUE = 1F;
    private static final Float UPDATED_CONVERTED_VALUE = 2F;

    private static final Integer DEFAULT_DAYS_TO_EXPIRE = 1;
    private static final Integer UPDATED_DAYS_TO_EXPIRE = 2;

    private static final String ENTITY_API_URL = "/api/reward-configs";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private RewardConfigRepository rewardConfigRepository;

    @Mock
    private RewardConfigRepository rewardConfigRepositoryMock;

    @Autowired
    private RewardConfigMapper rewardConfigMapper;

    @Mock
    private RewardConfigService rewardConfigServiceMock;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restRewardConfigMockMvc;

    private RewardConfig rewardConfig;

    private RewardConfig insertedRewardConfig;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static RewardConfig createEntity(EntityManager em) {
        RewardConfig rewardConfig = new RewardConfig()
            .title(DEFAULT_TITLE)
            .description(DEFAULT_DESCRIPTION)
            .balanceValue(DEFAULT_BALANCE_VALUE)
            .convertedValue(DEFAULT_CONVERTED_VALUE)
            .daysToExpire(DEFAULT_DAYS_TO_EXPIRE);
        return rewardConfig;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static RewardConfig createUpdatedEntity(EntityManager em) {
        RewardConfig rewardConfig = new RewardConfig()
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .balanceValue(UPDATED_BALANCE_VALUE)
            .convertedValue(UPDATED_CONVERTED_VALUE)
            .daysToExpire(UPDATED_DAYS_TO_EXPIRE);
        return rewardConfig;
    }

    @BeforeEach
    public void initTest() {
        rewardConfig = createEntity(em);
    }

    @AfterEach
    public void cleanup() {
        if (insertedRewardConfig != null) {
            rewardConfigRepository.delete(insertedRewardConfig);
            insertedRewardConfig = null;
        }
    }

    @Test
    @Transactional
    void createRewardConfig() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the RewardConfig
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);
        var returnedRewardConfigDTO = om.readValue(
            restRewardConfigMockMvc
                .perform(
                    post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardConfigDTO))
                )
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            RewardConfigDTO.class
        );

        // Validate the RewardConfig in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        var returnedRewardConfig = rewardConfigMapper.toEntity(returnedRewardConfigDTO);
        assertRewardConfigUpdatableFieldsEquals(returnedRewardConfig, getPersistedRewardConfig(returnedRewardConfig));

        insertedRewardConfig = returnedRewardConfig;
    }

    @Test
    @Transactional
    void createRewardConfigWithExistingId() throws Exception {
        // Create the RewardConfig with an existing ID
        rewardConfig.setId(1L);
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restRewardConfigMockMvc
            .perform(
                post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the RewardConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkTitleIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        rewardConfig.setTitle(null);

        // Create the RewardConfig, which fails.
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);

        restRewardConfigMockMvc
            .perform(
                post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllRewardConfigs() throws Exception {
        // Initialize the database
        insertedRewardConfig = rewardConfigRepository.saveAndFlush(rewardConfig);

        // Get all the rewardConfigList
        restRewardConfigMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(rewardConfig.getId().intValue())))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)))
            .andExpect(jsonPath("$.[*].balanceValue").value(hasItem(DEFAULT_BALANCE_VALUE)))
            .andExpect(jsonPath("$.[*].convertedValue").value(hasItem(DEFAULT_CONVERTED_VALUE.doubleValue())))
            .andExpect(jsonPath("$.[*].daysToExpire").value(hasItem(DEFAULT_DAYS_TO_EXPIRE)));
    }

    @SuppressWarnings({ "unchecked" })
    void getAllRewardConfigsWithEagerRelationshipsIsEnabled() throws Exception {
        when(rewardConfigServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restRewardConfigMockMvc.perform(get(ENTITY_API_URL + "?eagerload=true")).andExpect(status().isOk());

        verify(rewardConfigServiceMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({ "unchecked" })
    void getAllRewardConfigsWithEagerRelationshipsIsNotEnabled() throws Exception {
        when(rewardConfigServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restRewardConfigMockMvc.perform(get(ENTITY_API_URL + "?eagerload=false")).andExpect(status().isOk());
        verify(rewardConfigRepositoryMock, times(1)).findAll(any(Pageable.class));
    }

    @Test
    @Transactional
    void getRewardConfig() throws Exception {
        // Initialize the database
        insertedRewardConfig = rewardConfigRepository.saveAndFlush(rewardConfig);

        // Get the rewardConfig
        restRewardConfigMockMvc
            .perform(get(ENTITY_API_URL_ID, rewardConfig.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(rewardConfig.getId().intValue()))
            .andExpect(jsonPath("$.title").value(DEFAULT_TITLE.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION))
            .andExpect(jsonPath("$.balanceValue").value(DEFAULT_BALANCE_VALUE))
            .andExpect(jsonPath("$.convertedValue").value(DEFAULT_CONVERTED_VALUE.doubleValue()))
            .andExpect(jsonPath("$.daysToExpire").value(DEFAULT_DAYS_TO_EXPIRE));
    }

    @Test
    @Transactional
    void getNonExistingRewardConfig() throws Exception {
        // Get the rewardConfig
        restRewardConfigMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingRewardConfig() throws Exception {
        // Initialize the database
        insertedRewardConfig = rewardConfigRepository.saveAndFlush(rewardConfig);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the rewardConfig
        RewardConfig updatedRewardConfig = rewardConfigRepository.findById(rewardConfig.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedRewardConfig are not directly saved in db
        em.detach(updatedRewardConfig);
        updatedRewardConfig
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .balanceValue(UPDATED_BALANCE_VALUE)
            .convertedValue(UPDATED_CONVERTED_VALUE)
            .daysToExpire(UPDATED_DAYS_TO_EXPIRE);
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(updatedRewardConfig);

        restRewardConfigMockMvc
            .perform(
                put(ENTITY_API_URL_ID, rewardConfigDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isOk());

        // Validate the RewardConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedRewardConfigToMatchAllProperties(updatedRewardConfig);
    }

    @Test
    @Transactional
    void putNonExistingRewardConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        rewardConfig.setId(longCount.incrementAndGet());

        // Create the RewardConfig
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restRewardConfigMockMvc
            .perform(
                put(ENTITY_API_URL_ID, rewardConfigDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the RewardConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchRewardConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        rewardConfig.setId(longCount.incrementAndGet());

        // Create the RewardConfig
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restRewardConfigMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the RewardConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamRewardConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        rewardConfig.setId(longCount.incrementAndGet());

        // Create the RewardConfig
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restRewardConfigMockMvc
            .perform(
                put(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the RewardConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateRewardConfigWithPatch() throws Exception {
        // Initialize the database
        insertedRewardConfig = rewardConfigRepository.saveAndFlush(rewardConfig);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the rewardConfig using partial update
        RewardConfig partialUpdatedRewardConfig = new RewardConfig();
        partialUpdatedRewardConfig.setId(rewardConfig.getId());

        partialUpdatedRewardConfig
            .description(UPDATED_DESCRIPTION)
            .balanceValue(UPDATED_BALANCE_VALUE)
            .convertedValue(UPDATED_CONVERTED_VALUE)
            .daysToExpire(UPDATED_DAYS_TO_EXPIRE);

        restRewardConfigMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedRewardConfig.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedRewardConfig))
            )
            .andExpect(status().isOk());

        // Validate the RewardConfig in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertRewardConfigUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedRewardConfig, rewardConfig),
            getPersistedRewardConfig(rewardConfig)
        );
    }

    @Test
    @Transactional
    void fullUpdateRewardConfigWithPatch() throws Exception {
        // Initialize the database
        insertedRewardConfig = rewardConfigRepository.saveAndFlush(rewardConfig);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the rewardConfig using partial update
        RewardConfig partialUpdatedRewardConfig = new RewardConfig();
        partialUpdatedRewardConfig.setId(rewardConfig.getId());

        partialUpdatedRewardConfig
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .balanceValue(UPDATED_BALANCE_VALUE)
            .convertedValue(UPDATED_CONVERTED_VALUE)
            .daysToExpire(UPDATED_DAYS_TO_EXPIRE);

        restRewardConfigMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedRewardConfig.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedRewardConfig))
            )
            .andExpect(status().isOk());

        // Validate the RewardConfig in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertRewardConfigUpdatableFieldsEquals(partialUpdatedRewardConfig, getPersistedRewardConfig(partialUpdatedRewardConfig));
    }

    @Test
    @Transactional
    void patchNonExistingRewardConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        rewardConfig.setId(longCount.incrementAndGet());

        // Create the RewardConfig
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restRewardConfigMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, rewardConfigDTO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the RewardConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchRewardConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        rewardConfig.setId(longCount.incrementAndGet());

        // Create the RewardConfig
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restRewardConfigMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the RewardConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamRewardConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        rewardConfig.setId(longCount.incrementAndGet());

        // Create the RewardConfig
        RewardConfigDTO rewardConfigDTO = rewardConfigMapper.toDto(rewardConfig);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restRewardConfigMockMvc
            .perform(
                patch(ENTITY_API_URL)
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(rewardConfigDTO))
            )
            .andExpect(status().isMethodNotAllowed());

        // Validate the RewardConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteRewardConfig() throws Exception {
        // Initialize the database
        insertedRewardConfig = rewardConfigRepository.saveAndFlush(rewardConfig);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the rewardConfig
        restRewardConfigMockMvc
            .perform(delete(ENTITY_API_URL_ID, rewardConfig.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return rewardConfigRepository.count();
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

    protected RewardConfig getPersistedRewardConfig(RewardConfig rewardConfig) {
        return rewardConfigRepository.findById(rewardConfig.getId()).orElseThrow();
    }

    protected void assertPersistedRewardConfigToMatchAllProperties(RewardConfig expectedRewardConfig) {
        assertRewardConfigAllPropertiesEquals(expectedRewardConfig, getPersistedRewardConfig(expectedRewardConfig));
    }

    protected void assertPersistedRewardConfigToMatchUpdatableProperties(RewardConfig expectedRewardConfig) {
        assertRewardConfigAllUpdatablePropertiesEquals(expectedRewardConfig, getPersistedRewardConfig(expectedRewardConfig));
    }
}
