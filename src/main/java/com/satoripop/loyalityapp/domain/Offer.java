package com.satoripop.loyalityapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;

/**
 * A Offer.
 */
@Entity
@Table(name = "offer")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Offer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "from_date", nullable = false)
    private ZonedDateTime fromDate;

    @NotNull
    @Column(name = "to_date", nullable = false)
    private ZonedDateTime toDate;

    @NotNull
    @Column(name = "reward_points", nullable = false)
    private Integer rewardPoints;

    @NotNull
    @Column(name = "item_qty", nullable = false)
    private Integer itemQty;

    @NotNull
    @Column(name = "item_sku", nullable = false)
    private String itemSku;

    @NotNull
    @Column(name = "grand_total", precision = 21, scale = 2, nullable = false)
    private BigDecimal grandTotal;

    @Lob
    @Column(name = "image")
    private byte[] image;

    @Column(name = "image_content_type")
    private String imageContentType;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_offer__loyalty_levels",
        joinColumns = @JoinColumn(name = "offer_id"),
        inverseJoinColumns = @JoinColumn(name = "loyalty_levels_id")
    )
    @JsonIgnoreProperties(value = { "offers", "rewards" }, allowSetters = true)
    private Set<LoyaltyLevel> loyaltyLevels = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Offer id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public Offer title(String title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public Offer description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ZonedDateTime getFromDate() {
        return this.fromDate;
    }

    public Offer fromDate(ZonedDateTime fromDate) {
        this.setFromDate(fromDate);
        return this;
    }

    public void setFromDate(ZonedDateTime fromDate) {
        this.fromDate = fromDate;
    }

    public ZonedDateTime getToDate() {
        return this.toDate;
    }

    public Offer toDate(ZonedDateTime toDate) {
        this.setToDate(toDate);
        return this;
    }

    public void setToDate(ZonedDateTime toDate) {
        this.toDate = toDate;
    }

    public Integer getRewardPoints() {
        return this.rewardPoints;
    }

    public Offer rewardPoints(Integer rewardPoints) {
        this.setRewardPoints(rewardPoints);
        return this;
    }

    public void setRewardPoints(Integer rewardPoints) {
        this.rewardPoints = rewardPoints;
    }

    public Integer getItemQty() {
        return this.itemQty;
    }

    public Offer itemQty(Integer itemQty) {
        this.setItemQty(itemQty);
        return this;
    }

    public void setItemQty(Integer itemQty) {
        this.itemQty = itemQty;
    }

    public String getItemSku() {
        return this.itemSku;
    }

    public Offer itemSku(String itemSku) {
        this.setItemSku(itemSku);
        return this;
    }

    public void setItemSku(String itemSku) {
        this.itemSku = itemSku;
    }

    public BigDecimal getGrandTotal() {
        return this.grandTotal;
    }

    public Offer grandTotal(BigDecimal grandTotal) {
        this.setGrandTotal(grandTotal);
        return this;
    }

    public void setGrandTotal(BigDecimal grandTotal) {
        this.grandTotal = grandTotal;
    }

    public byte[] getImage() {
        return this.image;
    }

    public Offer image(byte[] image) {
        this.setImage(image);
        return this;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getImageContentType() {
        return this.imageContentType;
    }

    public Offer imageContentType(String imageContentType) {
        this.imageContentType = imageContentType;
        return this;
    }

    public void setImageContentType(String imageContentType) {
        this.imageContentType = imageContentType;
    }

    public Set<LoyaltyLevel> getLoyaltyLevels() {
        return this.loyaltyLevels;
    }

    public void setLoyaltyLevels(Set<LoyaltyLevel> loyaltyLevels) {
        this.loyaltyLevels = loyaltyLevels;
    }

    public Offer loyaltyLevels(Set<LoyaltyLevel> loyaltyLevels) {
        this.setLoyaltyLevels(loyaltyLevels);
        return this;
    }

    public Offer addLoyaltyLevels(LoyaltyLevel loyaltyLevel) {
        this.loyaltyLevels.add(loyaltyLevel);
        return this;
    }

    public Offer removeLoyaltyLevels(LoyaltyLevel loyaltyLevel) {
        this.loyaltyLevels.remove(loyaltyLevel);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Offer)) {
            return false;
        }
        return getId() != null && getId().equals(((Offer) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Offer{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", fromDate='" + getFromDate() + "'" +
            ", toDate='" + getToDate() + "'" +
            ", rewardPoints=" + getRewardPoints() +
            ", itemQty=" + getItemQty() +
            ", itemSku='" + getItemSku() + "'" +
            ", grandTotal=" + getGrandTotal() +
            ", image='" + getImage() + "'" +
            ", imageContentType='" + getImageContentType() + "'" +
            "}";
    }
}
