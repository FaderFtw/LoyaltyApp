package com.satoripop.loyalityapp.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.io.Serializable;

/**
 * A UserExtra.
 */
@Entity
@Table(name = "user_extra")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class UserExtra implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Column(name = "total_balance", nullable = false)
    private Long totalBalance;

    @NotNull
    @Column(name = "actual_balance", nullable = false)
    private Long actualBalance;

    @OneToOne
    @MapsId
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public UserExtra id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getTotalBalance() {
        return this.totalBalance;
    }

    public UserExtra totalBalance(Long totalBalance) {
        this.setTotalBalance(totalBalance);
        return this;
    }

    public void setTotalBalance(Long totalBalance) {
        this.totalBalance = totalBalance;
    }

    public Long getActualBalance() {
        return this.actualBalance;
    }

    public UserExtra actualBalance(Long actualBalance) {
        this.setActualBalance(actualBalance);
        return this;
    }

    public void setActualBalance(Long actualBalance) {
        this.actualBalance = actualBalance;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public UserExtra user(User user) {
        this.setUser(user);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof UserExtra)) {
            return false;
        }
        return getId() != null && getId().equals(((UserExtra) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "UserExtra{" +
            "id=" + getId() +
            ", totalBalance=" + getTotalBalance() +
            ", actualBalance=" + getActualBalance() +
            "}";
    }
}
