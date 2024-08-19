package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the LoyaltyLevel entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LoyaltyLevelRepository extends JpaRepository<LoyaltyLevel, Long> {}