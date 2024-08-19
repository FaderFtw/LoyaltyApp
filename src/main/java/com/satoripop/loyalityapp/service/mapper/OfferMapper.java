package com.satoripop.loyalityapp.service.mapper;

import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import com.satoripop.loyalityapp.domain.Offer;
import com.satoripop.loyalityapp.service.dto.LoyaltyLevelDTO;
import com.satoripop.loyalityapp.service.dto.OfferDTO;
import java.util.Set;
import java.util.stream.Collectors;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Offer} and its DTO {@link OfferDTO}.
 */
@Mapper(componentModel = "spring")
public interface OfferMapper extends EntityMapper<OfferDTO, Offer> {
    @Mapping(target = "loyaltyLevels", source = "loyaltyLevels", qualifiedByName = "loyaltyLevelIdSet")
    OfferDTO toDto(Offer s);

    @Mapping(target = "removeLoyaltyLevels", ignore = true)
    Offer toEntity(OfferDTO offerDTO);

    @Named("loyaltyLevelId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    LoyaltyLevelDTO toDtoLoyaltyLevelId(LoyaltyLevel loyaltyLevel);

    @Named("loyaltyLevelIdSet")
    default Set<LoyaltyLevelDTO> toDtoLoyaltyLevelIdSet(Set<LoyaltyLevel> loyaltyLevel) {
        return loyaltyLevel.stream().map(this::toDtoLoyaltyLevelId).collect(Collectors.toSet());
    }
}
