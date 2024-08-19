package com.satoripop.loyalityapp.service;

import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import com.satoripop.loyalityapp.repository.LoyaltyLevelRepository;
import com.satoripop.loyalityapp.service.dto.LoyaltyLevelDTO;
import com.satoripop.loyalityapp.service.mapper.LoyaltyLevelMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.satoripop.loyalityapp.domain.LoyaltyLevel}.
 */
@Service
@Transactional
public class LoyaltyLevelService {

    private static final Logger log = LoggerFactory.getLogger(LoyaltyLevelService.class);

    private final LoyaltyLevelRepository loyaltyLevelRepository;

    private final LoyaltyLevelMapper loyaltyLevelMapper;

    public LoyaltyLevelService(LoyaltyLevelRepository loyaltyLevelRepository, LoyaltyLevelMapper loyaltyLevelMapper) {
        this.loyaltyLevelRepository = loyaltyLevelRepository;
        this.loyaltyLevelMapper = loyaltyLevelMapper;
    }

    /**
     * Save a loyaltyLevel.
     *
     * @param loyaltyLevelDTO the entity to save.
     * @return the persisted entity.
     */
    public LoyaltyLevelDTO save(LoyaltyLevelDTO loyaltyLevelDTO) {
        log.debug("Request to save LoyaltyLevel : {}", loyaltyLevelDTO);
        LoyaltyLevel loyaltyLevel = loyaltyLevelMapper.toEntity(loyaltyLevelDTO);
        loyaltyLevel = loyaltyLevelRepository.save(loyaltyLevel);
        return loyaltyLevelMapper.toDto(loyaltyLevel);
    }

    /**
     * Update a loyaltyLevel.
     *
     * @param loyaltyLevelDTO the entity to save.
     * @return the persisted entity.
     */
    public LoyaltyLevelDTO update(LoyaltyLevelDTO loyaltyLevelDTO) {
        log.debug("Request to update LoyaltyLevel : {}", loyaltyLevelDTO);
        LoyaltyLevel loyaltyLevel = loyaltyLevelMapper.toEntity(loyaltyLevelDTO);
        loyaltyLevel = loyaltyLevelRepository.save(loyaltyLevel);
        return loyaltyLevelMapper.toDto(loyaltyLevel);
    }

    /**
     * Partially update a loyaltyLevel.
     *
     * @param loyaltyLevelDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<LoyaltyLevelDTO> partialUpdate(LoyaltyLevelDTO loyaltyLevelDTO) {
        log.debug("Request to partially update LoyaltyLevel : {}", loyaltyLevelDTO);

        return loyaltyLevelRepository
            .findById(loyaltyLevelDTO.getId())
            .map(existingLoyaltyLevel -> {
                loyaltyLevelMapper.partialUpdate(existingLoyaltyLevel, loyaltyLevelDTO);

                return existingLoyaltyLevel;
            })
            .map(loyaltyLevelRepository::save)
            .map(loyaltyLevelMapper::toDto);
    }

    /**
     * Get all the loyaltyLevels.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<LoyaltyLevelDTO> findAll(Pageable pageable) {
        log.debug("Request to get all LoyaltyLevels");
        return loyaltyLevelRepository.findAll(pageable).map(loyaltyLevelMapper::toDto);
    }

    /**
     * Get one loyaltyLevel by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<LoyaltyLevelDTO> findOne(Long id) {
        log.debug("Request to get LoyaltyLevel : {}", id);
        return loyaltyLevelRepository.findById(id).map(loyaltyLevelMapper::toDto);
    }

    /**
     * Delete the loyaltyLevel by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete LoyaltyLevel : {}", id);
        // Check if there is users related to this loyalty level and if its the case we set the loyalty level to null
        loyaltyLevelRepository.deleteById(id);
    }
}
