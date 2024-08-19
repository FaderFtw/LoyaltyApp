package com.satoripop.loyalityapp.domain;

import static com.satoripop.loyalityapp.domain.LoyaltyLevelTestSamples.*;
import static com.satoripop.loyalityapp.domain.RewardConfigTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.satoripop.loyalityapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class RewardConfigTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(RewardConfig.class);
        RewardConfig rewardConfig1 = getRewardConfigSample1();
        RewardConfig rewardConfig2 = new RewardConfig();
        assertThat(rewardConfig1).isNotEqualTo(rewardConfig2);

        rewardConfig2.setId(rewardConfig1.getId());
        assertThat(rewardConfig1).isEqualTo(rewardConfig2);

        rewardConfig2 = getRewardConfigSample2();
        assertThat(rewardConfig1).isNotEqualTo(rewardConfig2);
    }

    @Test
    void loyaltyLevelsTest() {
        RewardConfig rewardConfig = getRewardConfigRandomSampleGenerator();
        LoyaltyLevel loyaltyLevelBack = getLoyaltyLevelRandomSampleGenerator();

        rewardConfig.addLoyaltyLevels(loyaltyLevelBack);
        assertThat(rewardConfig.getLoyaltyLevels()).containsOnly(loyaltyLevelBack);

        rewardConfig.removeLoyaltyLevels(loyaltyLevelBack);
        assertThat(rewardConfig.getLoyaltyLevels()).doesNotContain(loyaltyLevelBack);

        rewardConfig.loyaltyLevels(new HashSet<>(Set.of(loyaltyLevelBack)));
        assertThat(rewardConfig.getLoyaltyLevels()).containsOnly(loyaltyLevelBack);

        rewardConfig.setLoyaltyLevels(new HashSet<>());
        assertThat(rewardConfig.getLoyaltyLevels()).doesNotContain(loyaltyLevelBack);
    }
}
