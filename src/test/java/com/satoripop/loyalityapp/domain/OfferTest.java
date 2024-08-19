package com.satoripop.loyalityapp.domain;

import static com.satoripop.loyalityapp.domain.LoyaltyLevelTestSamples.*;
import static com.satoripop.loyalityapp.domain.OfferTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.satoripop.loyalityapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class OfferTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Offer.class);
        Offer offer1 = getOfferSample1();
        Offer offer2 = new Offer();
        assertThat(offer1).isNotEqualTo(offer2);

        offer2.setId(offer1.getId());
        assertThat(offer1).isEqualTo(offer2);

        offer2 = getOfferSample2();
        assertThat(offer1).isNotEqualTo(offer2);
    }

    @Test
    void loyaltyLevelsTest() {
        Offer offer = getOfferRandomSampleGenerator();
        LoyaltyLevel loyaltyLevelBack = getLoyaltyLevelRandomSampleGenerator();

        offer.addLoyaltyLevels(loyaltyLevelBack);
        assertThat(offer.getLoyaltyLevels()).containsOnly(loyaltyLevelBack);

        offer.removeLoyaltyLevels(loyaltyLevelBack);
        assertThat(offer.getLoyaltyLevels()).doesNotContain(loyaltyLevelBack);

        offer.loyaltyLevels(new HashSet<>(Set.of(loyaltyLevelBack)));
        assertThat(offer.getLoyaltyLevels()).containsOnly(loyaltyLevelBack);

        offer.setLoyaltyLevels(new HashSet<>());
        assertThat(offer.getLoyaltyLevels()).doesNotContain(loyaltyLevelBack);
    }
}
