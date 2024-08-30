package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.Offer;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Offer entity.
 *
 * When extending this class, extend OfferRepositoryWithBagRelationships too.
 * For more information refer to https://github.com/jhipster/generator-jhipster/issues/17990.
 */
@Repository
public interface OfferRepository extends OfferRepositoryWithBagRelationships, JpaRepository<Offer, Long> {
    Page<Offer> findAll(Specification<Offer> spec, Pageable pageable);

    default Optional<Offer> findOneWithEagerRelationships(Long id) {
        return this.fetchBagRelationships(this.findById(id));
    }

    default List<Offer> findAllWithEagerRelationships() {
        return this.fetchBagRelationships(this.findAll());
    }

    default Page<Offer> findAllWithEagerRelationships(Pageable pageable) {
        return this.fetchBagRelationships(this.findAll(pageable));
    }

    @Query("SELECT o FROM Offer o WHERE o.grandTotal IS NOT NULL")
    Page<Offer> findAllWhereGrandTotalIsNotNull(Pageable pageable);

    @Query("SELECT o FROM Offer o WHERE o.itemQty IS NOT NULL AND o.itemSku IS NOT NULL")
    Page<Offer> findAllWhereItemQtyAndItemSkuIsNotNull(Pageable pageable);
}
