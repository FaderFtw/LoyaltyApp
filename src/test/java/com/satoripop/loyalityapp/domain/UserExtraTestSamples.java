package com.satoripop.loyalityapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class UserExtraTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static UserExtra getUserExtraSample1() {
        return new UserExtra().id("id1").totalBalance(1L).actualBalance(1L);
    }

    public static UserExtra getUserExtraSample2() {
        return new UserExtra().id("id2").totalBalance(2L).actualBalance(2L);
    }

    public static UserExtra getUserExtraRandomSampleGenerator() {
        return new UserExtra()
            .id(UUID.randomUUID().toString())
            .totalBalance(longCount.incrementAndGet())
            .actualBalance(longCount.incrementAndGet());
    }
}
