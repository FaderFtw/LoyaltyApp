package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.RewardConfig;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;

public interface RewardConfigRepositoryWithBagRelationships {
    Optional<RewardConfig> fetchBagRelationships(Optional<RewardConfig> rewardConfig);

    List<RewardConfig> fetchBagRelationships(List<RewardConfig> rewardConfigs);

    Page<RewardConfig> fetchBagRelationships(Page<RewardConfig> rewardConfigs);
}
