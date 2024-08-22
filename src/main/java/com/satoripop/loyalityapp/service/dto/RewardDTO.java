package com.satoripop.loyalityapp.service.dto;

import com.satoripop.loyalityapp.domain.enumeration.RewardStatus;
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

    @NotNull
    private RewardStatus status;

    @NotNull
    private UserDTO user;

    @NotNull
    private RewardConfigDTO rewardConfig;

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

    public RewardStatus getStatus() {
        return status;
    }

    public void setStatus(RewardStatus status) {
        this.status = status;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public RewardConfigDTO getRewardConfig() {
        return rewardConfig;
    }

    public void setRewardConfig(RewardConfigDTO rewardConfig) {
        this.rewardConfig = rewardConfig;
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
            ", status='" + getStatus() + "'" +
            ", user=" + getUser() +
            ", rewardConfig=" + getRewardConfig() +
            "}";
    }
}
