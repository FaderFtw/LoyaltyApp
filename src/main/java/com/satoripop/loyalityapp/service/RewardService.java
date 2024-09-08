package com.satoripop.loyalityapp.service;

import com.satoripop.loyalityapp.domain.Reward;
import com.satoripop.loyalityapp.domain.enumeration.RewardStatus;
import com.satoripop.loyalityapp.domain.enumeration.RewardType;
import com.satoripop.loyalityapp.repository.RewardRepository;
import com.satoripop.loyalityapp.service.dto.RewardDTO;
import com.satoripop.loyalityapp.service.mapper.RewardMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.satoripop.loyalityapp.domain.Reward}.
 */
@Service
@Transactional
public class RewardService {

    private static final Logger log = LoggerFactory.getLogger(RewardService.class);

    private final RewardRepository rewardRepository;

    private final RewardMapper rewardMapper;

    public RewardService(RewardRepository rewardRepository, RewardMapper rewardMapper) {
        this.rewardRepository = rewardRepository;
        this.rewardMapper = rewardMapper;
    }

    /**
     * Save a reward.
     *
     * @param rewardDTO the entity to save.
     * @return the persisted entity.
     */
    public RewardDTO save(RewardDTO rewardDTO) {
        log.debug("Request to save Reward : {}", rewardDTO);
        Reward reward = rewardMapper.toEntity(rewardDTO);
        reward = rewardRepository.save(reward);
        return rewardMapper.toDto(reward);
    }

    /**
     * Update a reward.
     *
     * @param rewardDTO the entity to save.
     * @return the persisted entity.
     */
    public RewardDTO update(RewardDTO rewardDTO) {
        log.debug("Request to update Reward : {}", rewardDTO);
        Reward reward = rewardMapper.toEntity(rewardDTO);
        reward = rewardRepository.save(reward);
        return rewardMapper.toDto(reward);
    }

    /**
     * Partially update a reward.
     *
     * @param rewardDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<RewardDTO> partialUpdate(RewardDTO rewardDTO) {
        log.debug("Request to partially update Reward : {}", rewardDTO);

        return rewardRepository
            .findById(rewardDTO.getId())
            .map(existingReward -> {
                rewardMapper.partialUpdate(existingReward, rewardDTO);

                return existingReward;
            })
            .map(rewardRepository::save)
            .map(rewardMapper::toDto);
    }

    /**
     * Get all the rewards.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<Reward> findAll(Pageable pageable) {
        log.debug("Request to get all Rewards");
        return rewardRepository.findAll(pageable);
    }

    /**
     * Get all the rewards by userId.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<Reward> findAllByCurrentUser(Pageable pageable, RewardType titleEquals, RewardStatus statusEquals) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        log.debug("Request to get all Rewards by user login: {}", username);

        if (titleEquals != null && statusEquals != null) {
            log.debug("Filtering rewards by title: {} and status: {} for user: {}", titleEquals, statusEquals, username);
            return rewardRepository.findByUserIsCurrentUserAndTitleEqualsAndStatusEquals(titleEquals, statusEquals, pageable);
        }

        if (titleEquals != null) {
            log.debug("Filtering rewards by title: {} for user: {}", titleEquals, username);
            return rewardRepository.findByUserIsCurrentUserAndTitleEquals(titleEquals, pageable);
        }

        if (statusEquals != null) {
            log.debug("Filtering rewards by status: {} for user: {}", statusEquals, username);
            return rewardRepository.findByUserIsCurrentUserAndStatusEquals(statusEquals, pageable);
        }

        return rewardRepository.findByUserIsCurrentUser(pageable);
    }

    /**
     * Get one reward by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Reward> findOne(Long id) {
        log.debug("Request to get Reward : {}", id);
        return rewardRepository.findById(id);
    }

    /**
     * Delete the reward by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Reward : {}", id);
        rewardRepository.deleteById(id);
    }
}
