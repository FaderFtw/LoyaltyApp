package com.satoripop.loyalityapp.web.rest;

import static com.satoripop.loyalityapp.domain.OfferAsserts.*;
import static com.satoripop.loyalityapp.web.rest.TestUtil.createUpdateProxyForBean;
import static com.satoripop.loyalityapp.web.rest.TestUtil.sameInstant;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.satoripop.loyalityapp.IntegrationTest;
import com.satoripop.loyalityapp.domain.Offer;
import com.satoripop.loyalityapp.repository.OfferRepository;
import com.satoripop.loyalityapp.service.OfferService;
import com.satoripop.loyalityapp.service.dto.OfferDTO;
import com.satoripop.loyalityapp.service.mapper.OfferMapper;
import jakarta.persistence.EntityManager;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

/**
 * Integration tests for the {@link OfferResource} REST controller.
 */
@IntegrationTest
@ExtendWith(MockitoExtension.class)
@AutoConfigureMockMvc
@WithMockUser
class OfferResourceIT {

    private static final ZonedDateTime DEFAULT_FROM_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_FROM_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final ZonedDateTime DEFAULT_TO_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_TO_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final String DEFAULT_TITLE = "AAAAAAAAAA";
    private static final String UPDATED_TITLE = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final Integer DEFAULT_REWARD_POINTS = 1;
    private static final Integer UPDATED_REWARD_POINTS = 2;

    private static final Float DEFAULT_ITEM_QTY = 1F;
    private static final Float UPDATED_ITEM_QTY = 2F;

    private static final String DEFAULT_ITEM_SKU = "AAAAAAAAAA";
    private static final String UPDATED_ITEM_SKU = "BBBBBBBBBB";

    private static final Float DEFAULT_GRAND_TOTAL = 1F;
    private static final Float UPDATED_GRAND_TOTAL = 2F;

    private static final String ENTITY_API_URL = "/api/offers";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private OfferRepository offerRepository;

    @Mock
    private OfferRepository offerRepositoryMock;

    @Autowired
    private OfferMapper offerMapper;

    @Mock
    private OfferService offerServiceMock;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restOfferMockMvc;

    private Offer offer;

    private Offer insertedOffer;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Offer createEntity(EntityManager em) {
        Offer offer = new Offer()
            .fromDate(DEFAULT_FROM_DATE)
            .toDate(DEFAULT_TO_DATE)
            .title(DEFAULT_TITLE)
            .description(DEFAULT_DESCRIPTION)
            .rewardPoints(DEFAULT_REWARD_POINTS)
            .itemQty(DEFAULT_ITEM_QTY)
            .itemSku(DEFAULT_ITEM_SKU)
            .grandTotal(DEFAULT_GRAND_TOTAL);
        return offer;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Offer createUpdatedEntity(EntityManager em) {
        Offer offer = new Offer()
            .fromDate(UPDATED_FROM_DATE)
            .toDate(UPDATED_TO_DATE)
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .rewardPoints(UPDATED_REWARD_POINTS)
            .itemQty(UPDATED_ITEM_QTY)
            .itemSku(UPDATED_ITEM_SKU)
            .grandTotal(UPDATED_GRAND_TOTAL);
        return offer;
    }

    @BeforeEach
    public void initTest() {
        offer = createEntity(em);
    }

    @AfterEach
    public void cleanup() {
        if (insertedOffer != null) {
            offerRepository.delete(insertedOffer);
            insertedOffer = null;
        }
    }

    @Test
    @Transactional
    void createOffer() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the Offer
        OfferDTO offerDTO = offerMapper.toDto(offer);
        var returnedOfferDTO = om.readValue(
            restOfferMockMvc
                .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(offerDTO)))
                .andExpect(status().isCreated())
                .andReturn()
                .getResponse()
                .getContentAsString(),
            OfferDTO.class
        );

        // Validate the Offer in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        var returnedOffer = offerMapper.toEntity(returnedOfferDTO);
        assertOfferUpdatableFieldsEquals(returnedOffer, getPersistedOffer(returnedOffer));

        insertedOffer = returnedOffer;
    }

    @Test
    @Transactional
    void createOfferWithExistingId() throws Exception {
        // Create the Offer with an existing ID
        offer.setId(1L);
        OfferDTO offerDTO = offerMapper.toDto(offer);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        restOfferMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(offerDTO)))
            .andExpect(status().isBadRequest());

        // Validate the Offer in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    void checkFromDateIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        offer.setFromDate(null);

        // Create the Offer, which fails.
        OfferDTO offerDTO = offerMapper.toDto(offer);

        restOfferMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(offerDTO)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkToDateIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        offer.setToDate(null);

        // Create the Offer, which fails.
        OfferDTO offerDTO = offerMapper.toDto(offer);

        restOfferMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(offerDTO)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void checkTitleIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        // set the field null
        offer.setTitle(null);

        // Create the Offer, which fails.
        OfferDTO offerDTO = offerMapper.toDto(offer);

        restOfferMockMvc
            .perform(post(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(offerDTO)))
            .andExpect(status().isBadRequest());

        assertSameRepositoryCount(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    void getAllOffers() throws Exception {
        // Initialize the database
        insertedOffer = offerRepository.saveAndFlush(offer);

        // Get all the offerList
        restOfferMockMvc
            .perform(get(ENTITY_API_URL + "?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(offer.getId().intValue())))
            .andExpect(jsonPath("$.[*].fromDate").value(hasItem(sameInstant(DEFAULT_FROM_DATE))))
            .andExpect(jsonPath("$.[*].toDate").value(hasItem(sameInstant(DEFAULT_TO_DATE))))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE)))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION)))
            .andExpect(jsonPath("$.[*].rewardPoints").value(hasItem(DEFAULT_REWARD_POINTS)))
            .andExpect(jsonPath("$.[*].itemQty").value(hasItem(DEFAULT_ITEM_QTY.doubleValue())))
            .andExpect(jsonPath("$.[*].itemSku").value(hasItem(DEFAULT_ITEM_SKU)))
            .andExpect(jsonPath("$.[*].grandTotal").value(hasItem(DEFAULT_GRAND_TOTAL.doubleValue())));
    }

    @SuppressWarnings({ "unchecked" })
    void getAllOffersWithEagerRelationshipsIsEnabled() throws Exception {
        when(offerServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restOfferMockMvc.perform(get(ENTITY_API_URL + "?eagerload=true")).andExpect(status().isOk());

        verify(offerServiceMock, times(1)).findAllWithEagerRelationships(any());
    }

    @SuppressWarnings({ "unchecked" })
    void getAllOffersWithEagerRelationshipsIsNotEnabled() throws Exception {
        when(offerServiceMock.findAllWithEagerRelationships(any())).thenReturn(new PageImpl(new ArrayList<>()));

        restOfferMockMvc.perform(get(ENTITY_API_URL + "?eagerload=false")).andExpect(status().isOk());
        verify(offerRepositoryMock, times(1)).findAll(any(Pageable.class));
    }

    @Test
    @Transactional
    void getOffer() throws Exception {
        // Initialize the database
        insertedOffer = offerRepository.saveAndFlush(offer);

        // Get the offer
        restOfferMockMvc
            .perform(get(ENTITY_API_URL_ID, offer.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(offer.getId().intValue()))
            .andExpect(jsonPath("$.fromDate").value(sameInstant(DEFAULT_FROM_DATE)))
            .andExpect(jsonPath("$.toDate").value(sameInstant(DEFAULT_TO_DATE)))
            .andExpect(jsonPath("$.title").value(DEFAULT_TITLE))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION))
            .andExpect(jsonPath("$.rewardPoints").value(DEFAULT_REWARD_POINTS))
            .andExpect(jsonPath("$.itemQty").value(DEFAULT_ITEM_QTY.doubleValue()))
            .andExpect(jsonPath("$.itemSku").value(DEFAULT_ITEM_SKU))
            .andExpect(jsonPath("$.grandTotal").value(DEFAULT_GRAND_TOTAL.doubleValue()));
    }

    @Test
    @Transactional
    void getNonExistingOffer() throws Exception {
        // Get the offer
        restOfferMockMvc.perform(get(ENTITY_API_URL_ID, Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    void putExistingOffer() throws Exception {
        // Initialize the database
        insertedOffer = offerRepository.saveAndFlush(offer);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the offer
        Offer updatedOffer = offerRepository.findById(offer.getId()).orElseThrow();
        // Disconnect from session so that the updates on updatedOffer are not directly saved in db
        em.detach(updatedOffer);
        updatedOffer
            .fromDate(UPDATED_FROM_DATE)
            .toDate(UPDATED_TO_DATE)
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .rewardPoints(UPDATED_REWARD_POINTS)
            .itemQty(UPDATED_ITEM_QTY)
            .itemSku(UPDATED_ITEM_SKU)
            .grandTotal(UPDATED_GRAND_TOTAL);
        OfferDTO offerDTO = offerMapper.toDto(updatedOffer);

        restOfferMockMvc
            .perform(
                put(ENTITY_API_URL_ID, offerDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(offerDTO))
            )
            .andExpect(status().isOk());

        // Validate the Offer in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedOfferToMatchAllProperties(updatedOffer);
    }

    @Test
    @Transactional
    void putNonExistingOffer() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        offer.setId(longCount.incrementAndGet());

        // Create the Offer
        OfferDTO offerDTO = offerMapper.toDto(offer);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restOfferMockMvc
            .perform(
                put(ENTITY_API_URL_ID, offerDTO.getId())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(offerDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the Offer in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithIdMismatchOffer() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        offer.setId(longCount.incrementAndGet());

        // Create the Offer
        OfferDTO offerDTO = offerMapper.toDto(offer);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restOfferMockMvc
            .perform(
                put(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(om.writeValueAsBytes(offerDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the Offer in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void putWithMissingIdPathParamOffer() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        offer.setId(longCount.incrementAndGet());

        // Create the Offer
        OfferDTO offerDTO = offerMapper.toDto(offer);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restOfferMockMvc
            .perform(put(ENTITY_API_URL).with(csrf()).contentType(MediaType.APPLICATION_JSON).content(om.writeValueAsBytes(offerDTO)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Offer in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void partialUpdateOfferWithPatch() throws Exception {
        // Initialize the database
        insertedOffer = offerRepository.saveAndFlush(offer);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the offer using partial update
        Offer partialUpdatedOffer = new Offer();
        partialUpdatedOffer.setId(offer.getId());

        partialUpdatedOffer.toDate(UPDATED_TO_DATE).rewardPoints(UPDATED_REWARD_POINTS).itemQty(UPDATED_ITEM_QTY).itemSku(UPDATED_ITEM_SKU);

        restOfferMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedOffer.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedOffer))
            )
            .andExpect(status().isOk());

        // Validate the Offer in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertOfferUpdatableFieldsEquals(createUpdateProxyForBean(partialUpdatedOffer, offer), getPersistedOffer(offer));
    }

    @Test
    @Transactional
    void fullUpdateOfferWithPatch() throws Exception {
        // Initialize the database
        insertedOffer = offerRepository.saveAndFlush(offer);

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the offer using partial update
        Offer partialUpdatedOffer = new Offer();
        partialUpdatedOffer.setId(offer.getId());

        partialUpdatedOffer
            .fromDate(UPDATED_FROM_DATE)
            .toDate(UPDATED_TO_DATE)
            .title(UPDATED_TITLE)
            .description(UPDATED_DESCRIPTION)
            .rewardPoints(UPDATED_REWARD_POINTS)
            .itemQty(UPDATED_ITEM_QTY)
            .itemSku(UPDATED_ITEM_SKU)
            .grandTotal(UPDATED_GRAND_TOTAL);

        restOfferMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, partialUpdatedOffer.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(partialUpdatedOffer))
            )
            .andExpect(status().isOk());

        // Validate the Offer in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertOfferUpdatableFieldsEquals(partialUpdatedOffer, getPersistedOffer(partialUpdatedOffer));
    }

    @Test
    @Transactional
    void patchNonExistingOffer() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        offer.setId(longCount.incrementAndGet());

        // Create the Offer
        OfferDTO offerDTO = offerMapper.toDto(offer);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restOfferMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, offerDTO.getId())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(offerDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the Offer in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithIdMismatchOffer() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        offer.setId(longCount.incrementAndGet());

        // Create the Offer
        OfferDTO offerDTO = offerMapper.toDto(offer);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restOfferMockMvc
            .perform(
                patch(ENTITY_API_URL_ID, longCount.incrementAndGet())
                    .with(csrf())
                    .contentType("application/merge-patch+json")
                    .content(om.writeValueAsBytes(offerDTO))
            )
            .andExpect(status().isBadRequest());

        // Validate the Offer in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void patchWithMissingIdPathParamOffer() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        offer.setId(longCount.incrementAndGet());

        // Create the Offer
        OfferDTO offerDTO = offerMapper.toDto(offer);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        restOfferMockMvc
            .perform(patch(ENTITY_API_URL).with(csrf()).contentType("application/merge-patch+json").content(om.writeValueAsBytes(offerDTO)))
            .andExpect(status().isMethodNotAllowed());

        // Validate the Offer in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    void deleteOffer() throws Exception {
        // Initialize the database
        insertedOffer = offerRepository.saveAndFlush(offer);

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the offer
        restOfferMockMvc
            .perform(delete(ENTITY_API_URL_ID, offer.getId()).with(csrf()).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return offerRepository.count();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected Offer getPersistedOffer(Offer offer) {
        return offerRepository.findById(offer.getId()).orElseThrow();
    }

    protected void assertPersistedOfferToMatchAllProperties(Offer expectedOffer) {
        assertOfferAllPropertiesEquals(expectedOffer, getPersistedOffer(expectedOffer));
    }

    protected void assertPersistedOfferToMatchUpdatableProperties(Offer expectedOffer) {
        assertOfferAllUpdatablePropertiesEquals(expectedOffer, getPersistedOffer(expectedOffer));
    }
}
