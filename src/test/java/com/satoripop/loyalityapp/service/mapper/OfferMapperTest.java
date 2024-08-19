package com.satoripop.loyalityapp.service.mapper;

import static com.satoripop.loyalityapp.domain.OfferAsserts.*;
import static com.satoripop.loyalityapp.domain.OfferTestSamples.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class OfferMapperTest {

    private OfferMapper offerMapper;

    @BeforeEach
    void setUp() {
        offerMapper = new OfferMapperImpl();
    }

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getOfferSample1();
        var actual = offerMapper.toEntity(offerMapper.toDto(expected));
        assertOfferAllPropertiesEquals(expected, actual);
    }
}
