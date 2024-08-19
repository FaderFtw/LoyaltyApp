package com.satoripop.loyalityapp.domain;

import static com.satoripop.loyalityapp.domain.AssertUtils.zonedDataTimeSameInstant;
import static org.assertj.core.api.Assertions.assertThat;

public class OfferAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOfferAllPropertiesEquals(Offer expected, Offer actual) {
        assertOfferAutoGeneratedPropertiesEquals(expected, actual);
        assertOfferAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOfferAllUpdatablePropertiesEquals(Offer expected, Offer actual) {
        assertOfferUpdatableFieldsEquals(expected, actual);
        assertOfferUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOfferAutoGeneratedPropertiesEquals(Offer expected, Offer actual) {
        assertThat(expected)
            .as("Verify Offer auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOfferUpdatableFieldsEquals(Offer expected, Offer actual) {
        assertThat(expected)
            .as("Verify Offer relevant properties")
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
            .satisfies(e -> assertThat(e.getTitle()).as("check title").isEqualTo(actual.getTitle()))
            .satisfies(e -> assertThat(e.getDescription()).as("check description").isEqualTo(actual.getDescription()))
            .satisfies(e -> assertThat(e.getRewardPoints()).as("check rewardPoints").isEqualTo(actual.getRewardPoints()))
            .satisfies(e -> assertThat(e.getItemQty()).as("check itemQty").isEqualTo(actual.getItemQty()))
            .satisfies(e -> assertThat(e.getItemSku()).as("check itemSku").isEqualTo(actual.getItemSku()))
            .satisfies(e -> assertThat(e.getGrandTotal()).as("check grandTotal").isEqualTo(actual.getGrandTotal()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertOfferUpdatableRelationshipsEquals(Offer expected, Offer actual) {
        assertThat(expected)
            .as("Verify Offer relationships")
            .satisfies(e -> assertThat(e.getLoyaltyLevels()).as("check loyaltyLevels").isEqualTo(actual.getLoyaltyLevels()));
    }
}