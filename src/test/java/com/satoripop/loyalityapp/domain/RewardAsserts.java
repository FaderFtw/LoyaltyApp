package com.satoripop.loyalityapp.domain;

import static com.satoripop.loyalityapp.domain.AssertUtils.zonedDataTimeSameInstant;
import static org.assertj.core.api.Assertions.assertThat;

public class RewardAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRewardAllPropertiesEquals(Reward expected, Reward actual) {
        assertRewardAutoGeneratedPropertiesEquals(expected, actual);
        assertRewardAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRewardAllUpdatablePropertiesEquals(Reward expected, Reward actual) {
        assertRewardUpdatableFieldsEquals(expected, actual);
        assertRewardUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRewardAutoGeneratedPropertiesEquals(Reward expected, Reward actual) {
        assertThat(expected)
            .as("Verify Reward auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRewardUpdatableFieldsEquals(Reward expected, Reward actual) {
        assertThat(expected)
            .as("Verify Reward relevant properties")
            .satisfies(
                e ->
                    assertThat(e.getCreatedAt())
                        .as("check createdAt")
                        .usingComparator(zonedDataTimeSameInstant)
                        .isEqualTo(actual.getCreatedAt())
            )
            .satisfies(
                e ->
                    assertThat(e.getFromDate())
                        .as("check fromDate")
                        .usingComparator(zonedDataTimeSameInstant)
                        .isEqualTo(actual.getFromDate())
            )
            .satisfies(
                e -> assertThat(e.getToDate()).as("check toDate").usingComparator(zonedDataTimeSameInstant).isEqualTo(actual.getToDate())
            )
            .satisfies(e -> assertThat(e.getCode()).as("check code").isEqualTo(actual.getCode()))
            .satisfies(e -> assertThat(e.getStatus()).as("check status").isEqualTo(actual.getStatus()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRewardUpdatableRelationshipsEquals(Reward expected, Reward actual) {
        assertThat(expected)
            .as("Verify Reward relationships")
            .satisfies(e -> assertThat(e.getRewardConfig()).as("check rewardConfig").isEqualTo(actual.getRewardConfig()));
    }
}
