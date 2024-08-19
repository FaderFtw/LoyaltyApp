package com.satoripop.loyalityapp.service.dto;

import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A DTO for the {@link com.satoripop.loyalityapp.domain.Offer} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class OfferDTO implements Serializable {

    private Long id;

    @NotNull
    private ZonedDateTime fromDate;

    @NotNull
    private ZonedDateTime toDate;

    @NotNull
    private String title;

    private String description;

    private Integer rewardPoints;

    private Float itemQty;

    private String itemSku;

    private Float grandTotal;

    private Set<LoyaltyLevelDTO> loyaltyLevels = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getFromDate() {
        return fromDate;
    }

    public void setFromDate(ZonedDateTime fromDate) {
        this.fromDate = fromDate;
    }

    public ZonedDateTime getToDate() {
        return toDate;
    }

    public void setToDate(ZonedDateTime toDate) {
        this.toDate = toDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getRewardPoints() {
        return rewardPoints;
    }

    public void setRewardPoints(Integer rewardPoints) {
        this.rewardPoints = rewardPoints;
    }

    public Float getItemQty() {
        return itemQty;
    }

    public void setItemQty(Float itemQty) {
        this.itemQty = itemQty;
    }

    public String getItemSku() {
        return itemSku;
    }

    public void setItemSku(String itemSku) {
        this.itemSku = itemSku;
    }

    public Float getGrandTotal() {
        return grandTotal;
    }

    public void setGrandTotal(Float grandTotal) {
        this.grandTotal = grandTotal;
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
        if (!(o instanceof OfferDTO)) {
            return false;
        }

        OfferDTO offerDTO = (OfferDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, offerDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "OfferDTO{" +
            "id=" + getId() +
            ", fromDate='" + getFromDate() + "'" +
            ", toDate='" + getToDate() + "'" +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", rewardPoints=" + getRewardPoints() +
            ", itemQty=" + getItemQty() +
            ", itemSku='" + getItemSku() + "'" +
            ", grandTotal=" + getGrandTotal() +
            ", loyaltyLevels=" + getLoyaltyLevels() +
            "}";
    }
}
