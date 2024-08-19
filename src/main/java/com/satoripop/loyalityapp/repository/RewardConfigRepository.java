package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.RewardConfig;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the RewardConfig entity.
 *
 * When extending this class, extend RewardConfigRepositoryWithBagRelationships too.
 * For more information refer to https://github.com/jhipster/generator-jhipster/issues/17990.
 */
@Repository
public interface RewardConfigRepository extends RewardConfigRepositoryWithBagRelationships, JpaRepository<RewardConfig, Long> {
    default Optional<RewardConfig> findOneWithEagerRelationships(Long id) {
        return this.fetchBagRelationships(this.findById(id));
    }

    default List<RewardConfig> findAllWithEagerRelationships() {
        return this.fetchBagRelationships(this.findAll());
    }

    default Page<RewardConfig> findAllWithEagerRelationships(Pageable pageable) {
        return this.fetchBagRelationships(this.findAll(pageable));
    }
}
