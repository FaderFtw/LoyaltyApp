package com.satoripop.loyalityapp.domain;

import static com.satoripop.loyalityapp.domain.RewardConfigTestSamples.*;
import static com.satoripop.loyalityapp.domain.RewardTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.satoripop.loyalityapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class RewardTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Reward.class);
        Reward reward1 = getRewardSample1();
        Reward reward2 = new Reward();
        assertThat(reward1).isNotEqualTo(reward2);

        reward2.setId(reward1.getId());
        assertThat(reward1).isEqualTo(reward2);

        reward2 = getRewardSample2();
        assertThat(reward1).isNotEqualTo(reward2);
    }

    @Test
    void rewardConfigTest() {
        Reward reward = getRewardRandomSampleGenerator();
        RewardConfig rewardConfigBack = getRewardConfigRandomSampleGenerator();

        reward.setRewardConfig(rewardConfigBack);
        assertThat(reward.getRewardConfig()).isEqualTo(rewardConfigBack);

        reward.rewardConfig(null);
        assertThat(reward.getRewardConfig()).isNull();
    }
}
