package com.satoripop.loyalityapp.repository;

import com.satoripop.loyalityapp.domain.User;
import java.nio.channels.FileChannel;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the {@link User} entity.
 */
@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findOneByLogin(String login);

    List<User> findByLoyaltyLevelId(Long id);

    List<User> findByLoyaltyLevelIdOrLoyaltyLevelIdIsNull(Long loyaltyLevelId);

    @EntityGraph(attributePaths = "authorities")
    Optional<User> findOneWithAuthoritiesByLogin(String login);

    Page<User> findAllByIdNotNullAndActivatedIsTrue(Pageable pageable);

    Optional<User> findUserByEmail(String email);
}
