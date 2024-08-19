package com.satoripop.loyalityapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class OfferTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static Offer getOfferSample1() {
        return new Offer().id(1L).title("title1").description("description1").rewardPoints(1).itemSku("itemSku1");
    }

    public static Offer getOfferSample2() {
        return new Offer().id(2L).title("title2").description("description2").rewardPoints(2).itemSku("itemSku2");
    }

    public static Offer getOfferRandomSampleGenerator() {
        return new Offer()
            .id(longCount.incrementAndGet())
            .title(UUID.randomUUID().toString())
            .description(UUID.randomUUID().toString())
            .rewardPoints(intCount.incrementAndGet())
            .itemSku(UUID.randomUUID().toString());
    }
}
