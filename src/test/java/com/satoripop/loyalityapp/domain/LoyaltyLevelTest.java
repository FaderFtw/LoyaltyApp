package com.satoripop.loyalityapp.domain;

import static com.satoripop.loyalityapp.domain.LoyaltyLevelTestSamples.*;
import static com.satoripop.loyalityapp.domain.OfferTestSamples.*;
import static com.satoripop.loyalityapp.domain.RewardConfigTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.satoripop.loyalityapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class LoyaltyLevelTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(LoyaltyLevel.class);
        LoyaltyLevel loyaltyLevel1 = getLoyaltyLevelSample1();
        LoyaltyLevel loyaltyLevel2 = new LoyaltyLevel();
        assertThat(loyaltyLevel1).isNotEqualTo(loyaltyLevel2);

        loyaltyLevel2.setId(loyaltyLevel1.getId());
        assertThat(loyaltyLevel1).isEqualTo(loyaltyLevel2);

        loyaltyLevel2 = getLoyaltyLevelSample2();
        assertThat(loyaltyLevel1).isNotEqualTo(loyaltyLevel2);
    }

    @Test
    void offersTest() {
        LoyaltyLevel loyaltyLevel = getLoyaltyLevelRandomSampleGenerator();
        Offer offerBack = getOfferRandomSampleGenerator();

        loyaltyLevel.addOffers(offerBack);
        assertThat(loyaltyLevel.getOffers()).containsOnly(offerBack);
        assertThat(offerBack.getLoyaltyLevels()).containsOnly(loyaltyLevel);

        loyaltyLevel.removeOffers(offerBack);
        assertThat(loyaltyLevel.getOffers()).doesNotContain(offerBack);
        assertThat(offerBack.getLoyaltyLevels()).doesNotContain(loyaltyLevel);

        loyaltyLevel.offers(new HashSet<>(Set.of(offerBack)));
        assertThat(loyaltyLevel.getOffers()).containsOnly(offerBack);
        assertThat(offerBack.getLoyaltyLevels()).containsOnly(loyaltyLevel);

        loyaltyLevel.setOffers(new HashSet<>());
        assertThat(loyaltyLevel.getOffers()).doesNotContain(offerBack);
        assertThat(offerBack.getLoyaltyLevels()).doesNotContain(loyaltyLevel);
    }

    @Test
    void rewardsTest() {
        LoyaltyLevel loyaltyLevel = getLoyaltyLevelRandomSampleGenerator();
        RewardConfig rewardConfigBack = getRewardConfigRandomSampleGenerator();

        loyaltyLevel.addRewards(rewardConfigBack);
        assertThat(loyaltyLevel.getRewards()).containsOnly(rewardConfigBack);
        assertThat(rewardConfigBack.getLoyaltyLevels()).containsOnly(loyaltyLevel);

        loyaltyLevel.removeRewards(rewardConfigBack);
        assertThat(loyaltyLevel.getRewards()).doesNotContain(rewardConfigBack);
        assertThat(rewardConfigBack.getLoyaltyLevels()).doesNotContain(loyaltyLevel);

        loyaltyLevel.rewards(new HashSet<>(Set.of(rewardConfigBack)));
        assertThat(loyaltyLevel.getRewards()).containsOnly(rewardConfigBack);
        assertThat(rewardConfigBack.getLoyaltyLevels()).containsOnly(loyaltyLevel);

        loyaltyLevel.setRewards(new HashSet<>());
        assertThat(loyaltyLevel.getRewards()).doesNotContain(rewardConfigBack);
        assertThat(rewardConfigBack.getLoyaltyLevels()).doesNotContain(loyaltyLevel);
    }
}
