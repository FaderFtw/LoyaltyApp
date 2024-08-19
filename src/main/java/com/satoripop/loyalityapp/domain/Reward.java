package com.satoripop.loyalityapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;

/**
 * A Reward.
 */
@Entity
@Table(name = "reward")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Reward implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "created_at", nullable = false)
    private ZonedDateTime createdAt;

    @NotNull
    @Column(name = "from_date", nullable = false)
    private ZonedDateTime fromDate;

    @NotNull
    @Column(name = "to_date", nullable = false)
    private ZonedDateTime toDate;

    @NotNull
    @Column(name = "code", nullable = false, unique = true)
    private String code;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = { "loyaltyLevels" }, allowSetters = true)
    private RewardConfig rewardConfig;

    @ManyToOne(optional = false)
    @NotNull
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Reward id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getCreatedAt() {
        return this.createdAt;
    }

    public Reward createdAt(ZonedDateTime createdAt) {
        this.setCreatedAt(createdAt);
        return this;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public ZonedDateTime getFromDate() {
        return this.fromDate;
    }

    public Reward fromDate(ZonedDateTime fromDate) {
        this.setFromDate(fromDate);
        return this;
    }

    public void setFromDate(ZonedDateTime fromDate) {
        this.fromDate = fromDate;
    }

    public ZonedDateTime getToDate() {
        return this.toDate;
    }

    public Reward toDate(ZonedDateTime toDate) {
        this.setToDate(toDate);
        return this;
    }

    public void setToDate(ZonedDateTime toDate) {
        this.toDate = toDate;
    }

    public String getCode() {
        return this.code;
    }

    public Reward code(String code) {
        this.setCode(code);
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public RewardConfig getRewardConfig() {
        return this.rewardConfig;
    }

    public void setRewardConfig(RewardConfig rewardConfig) {
        this.rewardConfig = rewardConfig;
    }

    public Reward rewardConfig(RewardConfig rewardConfig) {
        this.setRewardConfig(rewardConfig);
        return this;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Reward user(User user) {
        this.setUser(user);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Reward)) {
            return false;
        }
        return getId() != null && getId().equals(((Reward) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Reward{" +
            "id=" + getId() +
            ", createdAt='" + getCreatedAt() + "'" +
            ", fromDate='" + getFromDate() + "'" +
            ", toDate='" + getToDate() + "'" +
            ", code='" + getCode() + "'" +
            "}";
    }
}
