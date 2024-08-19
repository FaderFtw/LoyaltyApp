package com.satoripop.loyalityapp.service.mapper;

import static com.satoripop.loyalityapp.domain.LoyaltyLevelAsserts.*;
import static com.satoripop.loyalityapp.domain.LoyaltyLevelTestSamples.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LoyaltyLevelMapperTest {

    private LoyaltyLevelMapper loyaltyLevelMapper;

    @BeforeEach
    void setUp() {
        loyaltyLevelMapper = new LoyaltyLevelMapperImpl();
    }

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getLoyaltyLevelSample1();
        var actual = loyaltyLevelMapper.toEntity(loyaltyLevelMapper.toDto(expected));
        assertLoyaltyLevelAllPropertiesEquals(expected, actual);
    }
}
