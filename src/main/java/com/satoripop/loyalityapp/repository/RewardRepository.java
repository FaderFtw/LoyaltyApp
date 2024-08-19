package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.Reward;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Reward entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RewardRepository extends JpaRepository<Reward, Long> {
    @Query("select reward from Reward reward where reward.user.login = ?#{authentication.name}")
    List<Reward> findByUserIsCurrentUser();
}
