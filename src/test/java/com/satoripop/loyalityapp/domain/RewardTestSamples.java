package com.satoripop.loyalityapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class RewardTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Reward getRewardSample1() {
        return new Reward().id(1L).code("code1");
    }

    public static Reward getRewardSample2() {
        return new Reward().id(2L).code("code2");
    }

    public static Reward getRewardRandomSampleGenerator() {
        return new Reward().id(longCount.incrementAndGet()).code(UUID.randomUUID().toString());
    }
}
