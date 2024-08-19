package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.Offer;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

/**
 * Utility repository to load bag relationships based on https://vladmihalcea.com/hibernate-multiplebagfetchexception/
 */
public class OfferRepositoryWithBagRelationshipsImpl implements OfferRepositoryWithBagRelationships {

    private static final String ID_PARAMETER = "id";
    private static final String OFFERS_PARAMETER = "offers";

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public Optional<Offer> fetchBagRelationships(Optional<Offer> offer) {
        return offer.map(this::fetchLoyaltyLevels);
    }

    @Override
    public Page<Offer> fetchBagRelationships(Page<Offer> offers) {
        return new PageImpl<>(fetchBagRelationships(offers.getContent()), offers.getPageable(), offers.getTotalElements());
    }

    @Override
    public List<Offer> fetchBagRelationships(List<Offer> offers) {
        return Optional.of(offers).map(this::fetchLoyaltyLevels).orElse(Collections.emptyList());
    }

    Offer fetchLoyaltyLevels(Offer result) {
        return entityManager
            .createQuery("select offer from Offer offer left join fetch offer.loyaltyLevels where offer.id = :id", Offer.class)
            .setParameter(ID_PARAMETER, result.getId())
            .getSingleResult();
    }

    List<Offer> fetchLoyaltyLevels(List<Offer> offers) {
        HashMap<Object, Integer> order = new HashMap<>();
        IntStream.range(0, offers.size()).forEach(index -> order.put(offers.get(index).getId(), index));
        List<Offer> result = entityManager
            .createQuery("select offer from Offer offer left join fetch offer.loyaltyLevels where offer in :offers", Offer.class)
            .setParameter(OFFERS_PARAMETER, offers)
            .getResultList();
        Collections.sort(result, (o1, o2) -> Integer.compare(order.get(o1.getId()), order.get(o2.getId())));
        return result;
    }
}
