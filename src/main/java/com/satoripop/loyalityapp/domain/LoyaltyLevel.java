package com.satoripop.loyalityapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.satoripop.loyalityapp.domain.enumeration.LoyaltyType;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A LoyaltyLevel.
 */
@Entity
@Table(name = "loyalty_level")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class LoyaltyLevel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "title", unique = true)
    private LoyaltyType title;

    @Column(name = "description")
    private String description;

    @NotNull
    @Column(name = "min_balance", nullable = false)
    private Long minBalance;

    @NotNull
    @Column(name = "max_balance", nullable = false)
    private Long maxBalance;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "loyaltyLevels")
    @JsonIgnoreProperties(value = { "loyaltyLevels" }, allowSetters = true)
    private Set<Offer> offers = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "loyaltyLevels")
    @JsonIgnoreProperties(value = { "loyaltyLevels" }, allowSetters = true)
    private Set<RewardConfig> rewards = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public LoyaltyLevel id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LoyaltyType getTitle() {
        return this.title;
    }

    public LoyaltyLevel title(LoyaltyType title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(LoyaltyType title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public LoyaltyLevel description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getMinBalance() {
        return this.minBalance;
    }

    public LoyaltyLevel minBalance(Long minBalance) {
        this.setMinBalance(minBalance);
        return this;
    }

    public void setMinBalance(Long minBalance) {
        this.minBalance = minBalance;
    }

    public Long getMaxBalance() {
        return this.maxBalance;
    }

    public LoyaltyLevel maxBalance(Long maxBalance) {
        this.setMaxBalance(maxBalance);
        return this;
    }

    public void setMaxBalance(Long maxBalance) {
        this.maxBalance = maxBalance;
    }

    public Set<Offer> getOffers() {
        return this.offers;
    }

    public void setOffers(Set<Offer> offers) {
        if (this.offers != null) {
            this.offers.forEach(i -> i.removeLoyaltyLevels(this));
        }
        if (offers != null) {
            offers.forEach(i -> i.addLoyaltyLevels(this));
        }
        this.offers = offers;
    }

    public LoyaltyLevel offers(Set<Offer> offers) {
        this.setOffers(offers);
        return this;
    }

    public LoyaltyLevel addOffers(Offer offer) {
        this.offers.add(offer);
        offer.getLoyaltyLevels().add(this);
        return this;
    }

    public LoyaltyLevel removeOffers(Offer offer) {
        this.offers.remove(offer);
        offer.getLoyaltyLevels().remove(this);
        return this;
    }

    public Set<RewardConfig> getRewards() {
        return this.rewards;
    }

    public void setRewards(Set<RewardConfig> rewardConfigs) {
        if (this.rewards != null) {
            this.rewards.forEach(i -> i.removeLoyaltyLevels(this));
        }
        if (rewardConfigs != null) {
            rewardConfigs.forEach(i -> i.addLoyaltyLevels(this));
        }
        this.rewards = rewardConfigs;
    }

    public LoyaltyLevel rewards(Set<RewardConfig> rewardConfigs) {
        this.setRewards(rewardConfigs);
        return this;
    }

    public LoyaltyLevel addRewards(RewardConfig rewardConfig) {
        this.rewards.add(rewardConfig);
        rewardConfig.getLoyaltyLevels().add(this);
        return this;
    }

    public LoyaltyLevel removeRewards(RewardConfig rewardConfig) {
        this.rewards.remove(rewardConfig);
        rewardConfig.getLoyaltyLevels().remove(this);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof LoyaltyLevel)) {
            return false;
        }
        return getId() != null && getId().equals(((LoyaltyLevel) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "LoyaltyLevel{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", minBalance=" + getMinBalance() +
            ", maxBalance=" + getMaxBalance() +
            "}";
    }
}
