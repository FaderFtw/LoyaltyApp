package com.satoripop.loyalityapp.service.dto;

import com.satoripop.loyalityapp.domain.enumeration.RewardType;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A DTO for the {@link com.satoripop.loyalityapp.domain.RewardConfig} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class RewardConfigDTO implements Serializable {

    private Long id;

    @NotNull
    private RewardType title;

    private String description;

    private Integer balanceValue;

    private Float convertedValue;

    private Integer daysToExpire;

    private Set<LoyaltyLevelDTO> loyaltyLevels = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RewardType getTitle() {
        return title;
    }

    public void setTitle(RewardType title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getBalanceValue() {
        return balanceValue;
    }

    public void setBalanceValue(Integer balanceValue) {
        this.balanceValue = balanceValue;
    }

    public Float getConvertedValue() {
        return convertedValue;
    }

    public void setConvertedValue(Float convertedValue) {
        this.convertedValue = convertedValue;
    }

    public Integer getDaysToExpire() {
        return daysToExpire;
    }

    public void setDaysToExpire(Integer daysToExpire) {
        this.daysToExpire = daysToExpire;
    }

    public Set<LoyaltyLevelDTO> getLoyaltyLevels() {
        return loyaltyLevels;
    }

    public void setLoyaltyLevels(Set<LoyaltyLevelDTO> loyaltyLevels) {
        this.loyaltyLevels = loyaltyLevels;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof RewardConfigDTO)) {
            return false;
        }

        RewardConfigDTO rewardConfigDTO = (RewardConfigDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, rewardConfigDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "RewardConfigDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", balanceValue=" + getBalanceValue() +
            ", convertedValue=" + getConvertedValue() +
            ", daysToExpire=" + getDaysToExpire() +
            ", loyaltyLevels=" + getLoyaltyLevels() +
            "}";
    }
}
