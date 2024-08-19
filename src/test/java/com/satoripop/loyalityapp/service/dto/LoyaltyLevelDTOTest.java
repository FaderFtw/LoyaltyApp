package com.satoripop.loyalityapp.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import com.satoripop.loyalityapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class LoyaltyLevelDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(LoyaltyLevelDTO.class);
        LoyaltyLevelDTO loyaltyLevelDTO1 = new LoyaltyLevelDTO();
        loyaltyLevelDTO1.setId(1L);
        LoyaltyLevelDTO loyaltyLevelDTO2 = new LoyaltyLevelDTO();
        assertThat(loyaltyLevelDTO1).isNotEqualTo(loyaltyLevelDTO2);
        loyaltyLevelDTO2.setId(loyaltyLevelDTO1.getId());
        assertThat(loyaltyLevelDTO1).isEqualTo(loyaltyLevelDTO2);
        loyaltyLevelDTO2.setId(2L);
        assertThat(loyaltyLevelDTO1).isNotEqualTo(loyaltyLevelDTO2);
        loyaltyLevelDTO1.setId(null);
        assertThat(loyaltyLevelDTO1).isNotEqualTo(loyaltyLevelDTO2);
    }
}
