package com.satoripop.loyalityapp.service;

import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import com.satoripop.loyalityapp.domain.User;
import com.satoripop.loyalityapp.domain.UserExtra;
import com.satoripop.loyalityapp.repository.LoyaltyLevelRepository;
import com.satoripop.loyalityapp.repository.UserExtraRepository;
import com.satoripop.loyalityapp.repository.UserRepository;
import com.satoripop.loyalityapp.service.dto.LoyaltyLevelDTO;
import com.satoripop.loyalityapp.service.mapper.LoyaltyLevelMapper;
import java.util.List;
import java.util.Optional;
import java.util.Set;
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

    private UserRepository userRepository;
    private final UserExtraRepository userExtraRepository;

    private final LoyaltyLevelMapper loyaltyLevelMapper;

    public LoyaltyLevelService(
        LoyaltyLevelRepository loyaltyLevelRepository,
        UserRepository userRepository,
        LoyaltyLevelMapper loyaltyLevelMapper,
        UserExtraRepository userExtraRepository
    ) {
        this.loyaltyLevelRepository = loyaltyLevelRepository;
        this.userRepository = userRepository;
        this.loyaltyLevelMapper = loyaltyLevelMapper;
        this.userExtraRepository = userExtraRepository;
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

        // Fetch the LoyaltyLevel to be deleted
        LoyaltyLevel loyaltyLevelToDelete = loyaltyLevelRepository
            .findById(id)
            .orElseThrow(() -> new RuntimeException("LoyaltyLevel not found"));

        // Fetch all users associated with this LoyaltyLevel
        Set<User> users = userRepository.findByLoyaltyLevelId(id);

        // Define the new loyalty levels (You may need to adjust this to fit your logic)
        List<LoyaltyLevel> newLoyaltyLevels = loyaltyLevelRepository.findAll();

        newLoyaltyLevels.remove(loyaltyLevelToDelete);

        // Update each user with the appropriate new LoyaltyLevel
        for (User user : users) {
            UserExtra userExtra = userExtraRepository.findById(user.getId()).orElseThrow(() -> new RuntimeException("UserExtra not found"));

            LoyaltyLevel newLoyaltyLevel = newLoyaltyLevels
                .stream()
                .filter(
                    level -> userExtra.getTotalBalance() >= level.getMinBalance() && userExtra.getTotalBalance() <= level.getMaxBalance()
                )
                .findFirst()
                .orElse(null);

            user.setLoyaltyLevel(newLoyaltyLevel);
            userRepository.save(user);
        }

        loyaltyLevelRepository.deleteById(id);
    }
}
