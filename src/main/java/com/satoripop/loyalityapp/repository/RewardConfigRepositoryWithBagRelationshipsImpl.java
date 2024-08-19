package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.RewardConfig;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

/**
 * Utility repository to load bag relationships based on https://vladmihalcea.com/hibernate-multiplebagfetchexception/
 */
public class RewardConfigRepositoryWithBagRelationshipsImpl implements RewardConfigRepositoryWithBagRelationships {

    private static final String ID_PARAMETER = "id";
    private static final String REWARDCONFIGS_PARAMETER = "rewardConfigs";

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<RewardConfig> fetchBagRelationships(Optional<RewardConfig> rewardConfig) {
        return rewardConfig.map(this::fetchLoyaltyLevels);
    }

    @Override
    public Page<RewardConfig> fetchBagRelationships(Page<RewardConfig> rewardConfigs) {
        return new PageImpl<>(
            fetchBagRelationships(rewardConfigs.getContent()),
            rewardConfigs.getPageable(),
            rewardConfigs.getTotalElements()
        );
    }

    @Override
    public List<RewardConfig> fetchBagRelationships(List<RewardConfig> rewardConfigs) {
        return Optional.of(rewardConfigs).map(this::fetchLoyaltyLevels).orElse(Collections.emptyList());
    }

    RewardConfig fetchLoyaltyLevels(RewardConfig result) {
        return entityManager
            .createQuery(
                "select rewardConfig from RewardConfig rewardConfig left join fetch rewardConfig.loyaltyLevels where rewardConfig.id = :id",
                RewardConfig.class
            )
            .setParameter(ID_PARAMETER, result.getId())
            .getSingleResult();
    }

    List<RewardConfig> fetchLoyaltyLevels(List<RewardConfig> rewardConfigs) {
        HashMap<Object, Integer> order = new HashMap<>();
        IntStream.range(0, rewardConfigs.size()).forEach(index -> order.put(rewardConfigs.get(index).getId(), index));
        List<RewardConfig> result = entityManager
            .createQuery(
                "select rewardConfig from RewardConfig rewardConfig left join fetch rewardConfig.loyaltyLevels where rewardConfig in :rewardConfigs",
                RewardConfig.class
            )
            .setParameter(REWARDCONFIGS_PARAMETER, rewardConfigs)
            .getResultList();
        Collections.sort(result, (o1, o2) -> Integer.compare(order.get(o1.getId()), order.get(o2.getId())));
        return result;
    }
}
