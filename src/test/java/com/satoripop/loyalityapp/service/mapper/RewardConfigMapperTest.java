package com.satoripop.loyalityapp.service.mapper;

import static com.satoripop.loyalityapp.domain.RewardConfigAsserts.*;
import static com.satoripop.loyalityapp.domain.RewardConfigTestSamples.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class RewardConfigMapperTest {

    private RewardConfigMapper rewardConfigMapper;

    @BeforeEach
    void setUp() {
        rewardConfigMapper = new RewardConfigMapperImpl();
    }

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getRewardConfigSample1();
        var actual = rewardConfigMapper.toEntity(rewardConfigMapper.toDto(expected));
        assertRewardConfigAllPropertiesEquals(expected, actual);
    }
}
