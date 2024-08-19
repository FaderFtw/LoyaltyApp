package com.satoripop.loyalityapp.service.mapper;

import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import com.satoripop.loyalityapp.domain.RewardConfig;
import com.satoripop.loyalityapp.service.dto.LoyaltyLevelDTO;
import com.satoripop.loyalityapp.service.dto.RewardConfigDTO;
import java.util.Set;
import java.util.stream.Collectors;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link RewardConfig} and its DTO {@link RewardConfigDTO}.
 */
@Mapper(componentModel = "spring")
public interface RewardConfigMapper extends EntityMapper<RewardConfigDTO, RewardConfig> {
    @Mapping(target = "loyaltyLevels", source = "loyaltyLevels", qualifiedByName = "loyaltyLevelIdSet")
    RewardConfigDTO toDto(RewardConfig s);

    @Mapping(target = "removeLoyaltyLevels", ignore = true)
    RewardConfig toEntity(RewardConfigDTO rewardConfigDTO);

    @Named("loyaltyLevelId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    LoyaltyLevelDTO toDtoLoyaltyLevelId(LoyaltyLevel loyaltyLevel);

    @Named("loyaltyLevelIdSet")
    default Set<LoyaltyLevelDTO> toDtoLoyaltyLevelIdSet(Set<LoyaltyLevel> loyaltyLevel) {
        return loyaltyLevel.stream().map(this::toDtoLoyaltyLevelId).collect(Collectors.toSet());
    }
}
