package com.satoripop.loyalityapp.service;

import com.satoripop.loyalityapp.domain.RewardConfig;
import com.satoripop.loyalityapp.repository.RewardConfigRepository;
import com.satoripop.loyalityapp.service.dto.RewardConfigDTO;
import com.satoripop.loyalityapp.service.mapper.RewardConfigMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.satoripop.loyalityapp.domain.RewardConfig}.
 */
@Service
@Transactional
public class RewardConfigService {

    private static final Logger log = LoggerFactory.getLogger(RewardConfigService.class);

    private final RewardConfigRepository rewardConfigRepository;

    private final RewardConfigMapper rewardConfigMapper;

    public RewardConfigService(RewardConfigRepository rewardConfigRepository, RewardConfigMapper rewardConfigMapper) {
        this.rewardConfigRepository = rewardConfigRepository;
        this.rewardConfigMapper = rewardConfigMapper;
    }

    /**
     * Save a rewardConfig.
     *
     * @param rewardConfigDTO the entity to save.
     * @return the persisted entity.
     */
    public RewardConfigDTO save(RewardConfigDTO rewardConfigDTO) {
        log.debug("Request to save RewardConfig : {}", rewardConfigDTO);
        RewardConfig rewardConfig = rewardConfigMapper.toEntity(rewardConfigDTO);
        rewardConfig = rewardConfigRepository.save(rewardConfig);
        return rewardConfigMapper.toDto(rewardConfig);
    }

    /**
     * Update a rewardConfig.
     *
     * @param rewardConfigDTO the entity to save.
     * @return the persisted entity.
     */
    public RewardConfigDTO update(RewardConfigDTO rewardConfigDTO) {
        log.debug("Request to update RewardConfig : {}", rewardConfigDTO);
        RewardConfig rewardConfig = rewardConfigMapper.toEntity(rewardConfigDTO);
        rewardConfig = rewardConfigRepository.save(rewardConfig);
        return rewardConfigMapper.toDto(rewardConfig);
    }

    /**
     * Partially update a rewardConfig.
     *
     * @param rewardConfigDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<RewardConfigDTO> partialUpdate(RewardConfigDTO rewardConfigDTO) {
        log.debug("Request to partially update RewardConfig : {}", rewardConfigDTO);

        return rewardConfigRepository
            .findById(rewardConfigDTO.getId())
            .map(existingRewardConfig -> {
                rewardConfigMapper.partialUpdate(existingRewardConfig, rewardConfigDTO);

                return existingRewardConfig;
            })
            .map(rewardConfigRepository::save)
            .map(rewardConfigMapper::toDto);
    }

    /**
     * Get all the rewardConfigs.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<RewardConfigDTO> findAll(Pageable pageable) {
        log.debug("Request to get all RewardConfigs");
        return rewardConfigRepository.findAll(pageable).map(rewardConfigMapper::toDto);
    }

    /**
     * Get all the rewardConfigs with eager load of many-to-many relationships.
     *
     * @return the list of entities.
     */
    public Page<RewardConfigDTO> findAllWithEagerRelationships(Pageable pageable) {
        return rewardConfigRepository.findAllWithEagerRelationships(pageable).map(rewardConfigMapper::toDto);
    }

    /**
     * Get one rewardConfig by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<RewardConfig> findOne(Long id) {
        log.debug("Request to get RewardConfig : {}", id);
        return rewardConfigRepository.findOneWithEagerRelationships(id);
    }

    /**
     * Delete the rewardConfig by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete RewardConfig : {}", id);
        rewardConfigRepository.deleteById(id);
    }
}
