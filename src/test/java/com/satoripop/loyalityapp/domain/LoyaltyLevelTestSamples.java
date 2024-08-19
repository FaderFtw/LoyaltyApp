package com.satoripop.loyalityapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class LoyaltyLevelTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static LoyaltyLevel getLoyaltyLevelSample1() {
        return new LoyaltyLevel().id(1L).description("description1").minBalance(1L).maxBalance(1L);
    }

    public static LoyaltyLevel getLoyaltyLevelSample2() {
        return new LoyaltyLevel().id(2L).description("description2").minBalance(2L).maxBalance(2L);
    }

    public static LoyaltyLevel getLoyaltyLevelRandomSampleGenerator() {
        return new LoyaltyLevel()
            .id(longCount.incrementAndGet())
            .description(UUID.randomUUID().toString())
            .minBalance(longCount.incrementAndGet())
            .maxBalance(longCount.incrementAndGet());
    }
}
