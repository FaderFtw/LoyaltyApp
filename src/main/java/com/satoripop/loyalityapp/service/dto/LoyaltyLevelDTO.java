package com.satoripop.loyalityapp.service.dto;

import com.satoripop.loyalityapp.domain.enumeration.LoyaltyType;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A DTO for the {@link com.satoripop.loyalityapp.domain.LoyaltyLevel} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class LoyaltyLevelDTO implements Serializable {

    private Long id;

    private LoyaltyType title;

    private String description;

    @NotNull
    private Long minBalance;

    @NotNull
    private Long maxBalance;

    private Set<OfferDTO> offers = new HashSet<>();

    private Set<RewardConfigDTO> rewards = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LoyaltyType getTitle() {
        return title;
    }

    public void setTitle(LoyaltyType title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getMinBalance() {
        return minBalance;
    }

    public void setMinBalance(Long minBalance) {
        this.minBalance = minBalance;
    }

    public Long getMaxBalance() {
        return maxBalance;
    }

    public void setMaxBalance(Long maxBalance) {
        this.maxBalance = maxBalance;
    }

    public Set<OfferDTO> getOffers() {
        return offers;
    }

    public void setOffers(Set<OfferDTO> offers) {
        this.offers = offers;
    }

    public Set<RewardConfigDTO> getRewards() {
        return rewards;
    }

    public void setRewards(Set<RewardConfigDTO> rewards) {
        this.rewards = rewards;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof LoyaltyLevelDTO)) {
            return false;
        }

        LoyaltyLevelDTO loyaltyLevelDTO = (LoyaltyLevelDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, loyaltyLevelDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "LoyaltyLevelDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", minBalance=" + getMinBalance() +
            ", maxBalance=" + getMaxBalance() +
            ", offers=" + getOffers() +
            ", rewards=" + getRewards() +
            "}";
    }
}
