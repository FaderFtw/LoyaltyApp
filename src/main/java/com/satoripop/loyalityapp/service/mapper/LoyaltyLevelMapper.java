package com.satoripop.loyalityapp.service.mapper;

import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import com.satoripop.loyalityapp.domain.Offer;
import com.satoripop.loyalityapp.domain.RewardConfig;
import com.satoripop.loyalityapp.service.dto.LoyaltyLevelDTO;
import com.satoripop.loyalityapp.service.dto.OfferDTO;
import com.satoripop.loyalityapp.service.dto.RewardConfigDTO;
import java.util.Set;
import java.util.stream.Collectors;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link LoyaltyLevel} and its DTO {@link LoyaltyLevelDTO}.
 */
@Mapper(componentModel = "spring")
public interface LoyaltyLevelMapper extends EntityMapper<LoyaltyLevelDTO, LoyaltyLevel> {
    @Mapping(target = "offers", source = "offers", qualifiedByName = "offerIdSet")
    @Mapping(target = "rewards", source = "rewards", qualifiedByName = "rewardConfigIdSet")
    LoyaltyLevelDTO toDto(LoyaltyLevel s);

    @Mapping(target = "offers", ignore = true)
    @Mapping(target = "removeOffers", ignore = true)
    @Mapping(target = "rewards", ignore = true)
    @Mapping(target = "removeRewards", ignore = true)
    LoyaltyLevel toEntity(LoyaltyLevelDTO loyaltyLevelDTO);

    @Named("offerId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    OfferDTO toDtoOfferId(Offer offer);

    @Named("offerIdSet")
    default Set<OfferDTO> toDtoOfferIdSet(Set<Offer> offer) {
        return offer.stream().map(this::toDtoOfferId).collect(Collectors.toSet());
    }

    @Named("rewardConfigId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    RewardConfigDTO toDtoRewardConfigId(RewardConfig rewardConfig);

    @Named("rewardConfigIdSet")
    default Set<RewardConfigDTO> toDtoRewardConfigIdSet(Set<RewardConfig> rewardConfig) {
        return rewardConfig.stream().map(this::toDtoRewardConfigId).collect(Collectors.toSet());
    }
}
