package com.satoripop.loyalityapp.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import com.satoripop.loyalityapp.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class RewardConfigDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(RewardConfigDTO.class);
        RewardConfigDTO rewardConfigDTO1 = new RewardConfigDTO();
        rewardConfigDTO1.setId(1L);
        RewardConfigDTO rewardConfigDTO2 = new RewardConfigDTO();
        assertThat(rewardConfigDTO1).isNotEqualTo(rewardConfigDTO2);
        rewardConfigDTO2.setId(rewardConfigDTO1.getId());
        assertThat(rewardConfigDTO1).isEqualTo(rewardConfigDTO2);
        rewardConfigDTO2.setId(2L);
        assertThat(rewardConfigDTO1).isNotEqualTo(rewardConfigDTO2);
        rewardConfigDTO1.setId(null);
        assertThat(rewardConfigDTO1).isNotEqualTo(rewardConfigDTO2);
    }
}
