package com.satoripop.loyalityapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.satoripop.loyalityapp.domain.enumeration.RewardType;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A RewardConfig.
 */
@Entity
@Table(name = "reward_config")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class RewardConfig implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "title", nullable = false)
    private RewardType title;

    @Column(name = "description")
    private String description;

    @Column(name = "balance_value")
    private Integer balanceValue;

    @Column(name = "converted_value")
    private Float convertedValue;

    @Column(name = "days_to_expire")
    private Integer daysToExpire;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "rel_reward_config__loyalty_levels",
        joinColumns = @JoinColumn(name = "reward_config_id"),
        inverseJoinColumns = @JoinColumn(name = "loyalty_levels_id")
    )
    @JsonIgnoreProperties(value = { "offers", "rewards" }, allowSetters = true)
    private Set<LoyaltyLevel> loyaltyLevels = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public RewardConfig id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RewardType getTitle() {
        return this.title;
    }

    public RewardConfig title(RewardType title) {
        this.setTitle(title);
        return this;
    }

    public void setTitle(RewardType title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public RewardConfig description(String description) {
        this.setDescription(description);
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getBalanceValue() {
        return this.balanceValue;
    }

    public RewardConfig balanceValue(Integer balanceValue) {
        this.setBalanceValue(balanceValue);
        return this;
    }

    public void setBalanceValue(Integer balanceValue) {
        this.balanceValue = balanceValue;
    }

    public Float getConvertedValue() {
        return this.convertedValue;
    }

    public RewardConfig convertedValue(Float convertedValue) {
        this.setConvertedValue(convertedValue);
        return this;
    }

    public void setConvertedValue(Float convertedValue) {
        this.convertedValue = convertedValue;
    }

    public Integer getDaysToExpire() {
        return this.daysToExpire;
    }

    public RewardConfig daysToExpire(Integer daysToExpire) {
        this.setDaysToExpire(daysToExpire);
        return this;
    }

    public void setDaysToExpire(Integer daysToExpire) {
        this.daysToExpire = daysToExpire;
    }

    public Set<LoyaltyLevel> getLoyaltyLevels() {
        return this.loyaltyLevels;
    }

    public void setLoyaltyLevels(Set<LoyaltyLevel> loyaltyLevels) {
        this.loyaltyLevels = loyaltyLevels;
    }

    public RewardConfig loyaltyLevels(Set<LoyaltyLevel> loyaltyLevels) {
        this.setLoyaltyLevels(loyaltyLevels);
        return this;
    }

    public RewardConfig addLoyaltyLevels(LoyaltyLevel loyaltyLevel) {
        this.loyaltyLevels.add(loyaltyLevel);
        return this;
    }

    public RewardConfig removeLoyaltyLevels(LoyaltyLevel loyaltyLevel) {
        this.loyaltyLevels.remove(loyaltyLevel);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof RewardConfig)) {
            return false;
        }
        return getId() != null && getId().equals(((RewardConfig) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "RewardConfig{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", balanceValue=" + getBalanceValue() +
            ", convertedValue=" + getConvertedValue() +
            ", daysToExpire=" + getDaysToExpire() +
            "}";
    }
}
