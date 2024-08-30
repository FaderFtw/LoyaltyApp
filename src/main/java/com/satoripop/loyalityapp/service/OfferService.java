package com.satoripop.loyalityapp.service;

import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import com.satoripop.loyalityapp.domain.Offer;
import com.satoripop.loyalityapp.repository.OfferRepository;
import com.satoripop.loyalityapp.service.dto.OfferDTO;
import com.satoripop.loyalityapp.service.mapper.OfferMapper;
import jakarta.persistence.criteria.Join;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link com.satoripop.loyalityapp.domain.Offer}.
 */
@Service
@Transactional
public class OfferService {

    private static final Logger log = LoggerFactory.getLogger(OfferService.class);

    private final OfferRepository offerRepository;

    private final OfferMapper offerMapper;

    public OfferService(OfferRepository offerRepository, OfferMapper offerMapper) {
        this.offerRepository = offerRepository;
        this.offerMapper = offerMapper;
    }

    /**
     * Save a offer.
     *
     * @param offerDTO the entity to save.
     * @return the persisted entity.
     */
    public OfferDTO save(OfferDTO offerDTO) {
        log.debug("Request to save Offer : {}", offerDTO);
        Offer offer = offerMapper.toEntity(offerDTO);
        offer = offerRepository.save(offer);
        return offerMapper.toDto(offer);
    }

    /**
     * Update a offer.
     *
     * @param offerDTO the entity to save.
     * @return the persisted entity.
     */
    public OfferDTO update(OfferDTO offerDTO) {
        log.debug("Request to update Offer : {}", offerDTO);
        Offer offer = offerMapper.toEntity(offerDTO);
        offer = offerRepository.save(offer);
        return offerMapper.toDto(offer);
    }

    /**
     * Partially update a offer.
     *
     * @param offerDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<OfferDTO> partialUpdate(OfferDTO offerDTO) {
        log.debug("Request to partially update Offer : {}", offerDTO);

        return offerRepository
            .findById(offerDTO.getId())
            .map(existingOffer -> {
                offerMapper.partialUpdate(existingOffer, offerDTO);

                return existingOffer;
            })
            .map(offerRepository::save)
            .map(offerMapper::toDto);
    }

    /**
     * Get all the offers.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<OfferDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Offers");
        return offerRepository.findAll(pageable).map(offerMapper::toDto);
    }

    @Transactional(readOnly = true)
    public Page<OfferDTO> findAllByLoyaltyLevelId(
        Long loyaltyLevelId,
        Pageable pageable,
        Boolean grandTotalNotNull,
        Boolean itemQteNotNull,
        Boolean itemSkuNotNull
    ) {
        // Construct a query based on the parameters
        Specification<Offer> spec = Specification.where(null);

        if (loyaltyLevelId != null) {
            spec = spec.and((root, query, criteriaBuilder) -> {
                Join<Offer, LoyaltyLevel> loyaltyLevelsJoin = root.join("loyaltyLevels");
                return criteriaBuilder.equal(loyaltyLevelsJoin.get("id"), loyaltyLevelId);
            });
        }

        if (Boolean.TRUE.equals(grandTotalNotNull)) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.isNotNull(root.get("grandTotal")));
        }

        if (Boolean.TRUE.equals(itemQteNotNull)) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.isNotNull(root.get("itemQty")));
        }

        if (Boolean.TRUE.equals(itemSkuNotNull)) {
            spec = spec.and((root, query, criteriaBuilder) -> criteriaBuilder.isNotNull(root.get("itemSku")));
        }

        return offerRepository.findAll(spec, pageable).map(offerMapper::toDto);
    }

    /**
     * Get all the offers with eager load of many-to-many relationships.
     *
     * @return the list of entities.
     */
    public Page<OfferDTO> findAllWithEagerRelationships(Pageable pageable) {
        return offerRepository.findAllWithEagerRelationships(pageable).map(offerMapper::toDto);
    }

    /**
     * Get one offer by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Offer> findOne(Long id) {
        log.debug("Request to get Offer : {}", id);
        return offerRepository.findOneWithEagerRelationships(id);
    }

    /**
     * Delete the offer by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Offer : {}", id);
        offerRepository.deleteById(id);
    }
}
