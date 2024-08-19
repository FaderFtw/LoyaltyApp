package com.satoripop.loyalityapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class RewardConfigTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static RewardConfig getRewardConfigSample1() {
        return new RewardConfig().id(1L).description("description1").balanceValue(1).daysToExpire(1);
    }

    public static RewardConfig getRewardConfigSample2() {
        return new RewardConfig().id(2L).description("description2").balanceValue(2).daysToExpire(2);
    }

    public static RewardConfig getRewardConfigRandomSampleGenerator() {
        return new RewardConfig()
            .id(longCount.incrementAndGet())
            .description(UUID.randomUUID().toString())
            .balanceValue(intCount.incrementAndGet())
            .daysToExpire(intCount.incrementAndGet());
    }
}
