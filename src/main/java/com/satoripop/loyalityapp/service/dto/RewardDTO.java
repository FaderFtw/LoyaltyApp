package com.satoripop.loyalityapp.service.dto;

import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A DTO for the {@link com.satoripop.loyalityapp.domain.Reward} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class RewardDTO implements Serializable {

    private Long id;

    @NotNull
    private ZonedDateTime createdAt;

    @NotNull
    private ZonedDateTime fromDate;

    @NotNull
    private ZonedDateTime toDate;

    @NotNull
    private String code;

    private RewardConfigDTO rewardConfig;

    @NotNull
    private UserDTO user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(ZonedDateTime createdAt) {
        this.createdAt = createdAt;
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

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public RewardConfigDTO getRewardConfig() {
        return rewardConfig;
    }

    public void setRewardConfig(RewardConfigDTO rewardConfig) {
        this.rewardConfig = rewardConfig;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof RewardDTO)) {
            return false;
        }

        RewardDTO rewardDTO = (RewardDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, rewardDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "RewardDTO{" +
            "id=" + getId() +
            ", createdAt='" + getCreatedAt() + "'" +
            ", fromDate='" + getFromDate() + "'" +
            ", toDate='" + getToDate() + "'" +
            ", code='" + getCode() + "'" +
            ", rewardConfig=" + getRewardConfig() +
            ", user=" + getUser() +
            "}";
    }
}
