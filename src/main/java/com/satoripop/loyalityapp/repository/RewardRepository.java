package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.Reward;
import com.satoripop.loyalityapp.domain.enumeration.RewardStatus;
import com.satoripop.loyalityapp.domain.enumeration.RewardType;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Reward entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RewardRepository extends JpaRepository<Reward, Long> {
    @Query("select reward from Reward reward where reward.user.login = ?#{authentication.name}")
    Page<Reward> findByUserIsCurrentUser(Pageable page);

    @Query("select reward from Reward reward where reward.user.login = ?#{authentication.name} and reward.rewardConfig.title = ?1")
    Page<Reward> findByUserIsCurrentUserAndTitleEquals(@NotNull RewardType title, Pageable pageable);

    @Query("select reward from Reward reward where reward.user.login = ?#{authentication.name} and reward.status = ?1")
    Page<Reward> findByUserIsCurrentUserAndStatusEquals(@NotNull RewardStatus status, Pageable pageable);

    @Query(
        "select reward from Reward reward where reward.user.login = ?#{authentication.name} and reward.rewardConfig.title = ?1 and reward.status = ?2"
    )
    Page<Reward> findByUserIsCurrentUserAndTitleEqualsAndStatusEquals(
        @NotNull RewardType title,
        @NotNull RewardStatus status,
        Pageable pageable
    );
}
