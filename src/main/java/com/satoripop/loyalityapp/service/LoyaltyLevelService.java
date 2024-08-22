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
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private LoyaltyLevelRepository loyaltyLevelRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserExtraRepository userExtraRepository;

    @Autowired
    private LoyaltyLevelMapper loyaltyLevelMapper;

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
        this.updateUsersLoyaltyLevel(loyaltyLevelDTO.getId());

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

        Optional<LoyaltyLevelDTO> loyaltyLevelDTOUpdated = loyaltyLevelRepository
            .findById(loyaltyLevelDTO.getId())
            .map(existingLoyaltyLevel -> {
                loyaltyLevelMapper.partialUpdate(existingLoyaltyLevel, loyaltyLevelDTO);

                return existingLoyaltyLevel;
            })
            .map(loyaltyLevelRepository::save)
            .map(loyaltyLevelMapper::toDto);

        this.updateUsersLoyaltyLevel(loyaltyLevelDTO.getId());
        return loyaltyLevelDTOUpdated;
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

        loyaltyLevelRepository.deleteById(id);
        this.updateUsersLoyaltyLevel(id);
    }

    @Transactional
    public LoyaltyLevel determineNewLoyaltyLevel(Long totalBalance) {
        return loyaltyLevelRepository
            .findAll()
            .stream()
            .filter(level -> totalBalance >= level.getMinBalance() && totalBalance <= level.getMaxBalance())
            .findFirst()
            .orElse(null);
    }

    @Transactional
    protected void updateUsersLoyaltyLevel(Long loyaltyLevelId) {
        // Fetch all users associated with this LoyaltyLevel
        List<User> users = userRepository.findByLoyaltyLevelIdOrLoyaltyLevelIdIsNull(loyaltyLevelId);
        users.removeIf(user -> user.getAuthorities().stream().anyMatch(authority -> authority.getName().equals("ROLE_ADMIN")));
        log.debug("Users associated with LoyaltyLevel: {}", users);

        // Update each user with the appropriate new LoyaltyLevel
        for (User user : users) {
            UserExtra userExtra = userExtraRepository.findById(user.getId()).orElse(null);
            LoyaltyLevel newLoyaltyLevel = this.determineNewLoyaltyLevel(Objects.requireNonNull(userExtra).getTotalBalance());

            log.debug("New LoyaltyLevel for user: {} -> {}", user.getFirstName(), newLoyaltyLevel);
            userExtra.getUser().setLoyaltyLevel(newLoyaltyLevel);
            userRepository.save(userExtra.getUser());
        }
    }
}
