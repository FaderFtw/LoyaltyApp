package com.satoripop.loyalityapp.service.mapper;

import com.satoripop.loyalityapp.domain.Reward;
import com.satoripop.loyalityapp.domain.RewardConfig;
import com.satoripop.loyalityapp.domain.User;
import com.satoripop.loyalityapp.service.dto.RewardConfigDTO;
import com.satoripop.loyalityapp.service.dto.RewardDTO;
import com.satoripop.loyalityapp.service.dto.UserDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Reward} and its DTO {@link RewardDTO}.
 */
@Mapper(componentModel = "spring")
public interface RewardMapper extends EntityMapper<RewardDTO, Reward> {
    @Mapping(target = "rewardConfig", source = "rewardConfig", qualifiedByName = "rewardConfigId")
    @Mapping(target = "user", source = "user", qualifiedByName = "userId")
    RewardDTO toDto(Reward s);

    @Named("rewardConfigId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    RewardConfigDTO toDtoRewardConfigId(RewardConfig rewardConfig);

    @Named("userId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    UserDTO toDtoUserId(User user);
}
