package com.satoripop.loyalityapp.service;

import com.satoripop.loyalityapp.config.Constants;
import com.satoripop.loyalityapp.domain.Authority;
import com.satoripop.loyalityapp.domain.LoyaltyLevel;
import com.satoripop.loyalityapp.domain.User;
import com.satoripop.loyalityapp.domain.UserExtra;
import com.satoripop.loyalityapp.repository.AuthorityRepository;
import com.satoripop.loyalityapp.repository.LoyaltyLevelRepository;
import com.satoripop.loyalityapp.repository.UserExtraRepository;
import com.satoripop.loyalityapp.repository.UserRepository;
import com.satoripop.loyalityapp.security.SecurityUtils;
import com.satoripop.loyalityapp.service.dto.AdminUserDTO;
import com.satoripop.loyalityapp.service.dto.UserDTO;
import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class UserService {

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserExtraRepository userExtraRepository;

    @Autowired
    private LoyaltyLevelRepository loyaltyLevelRepository;

    @Autowired
    private LoyaltyLevelService loyaltyLevelService;

    @Autowired
    private AuthorityRepository authorityRepository;

    public Optional<UserDTO> findUserByEmail(String id) {
        return userRepository.findUserByEmail(id).map(UserDTO::new);
    }

    /**
     * Update basic information (first name, last name, email, language) for the current user.
     *
     * @param firstName first name of user.
     * @param lastName  last name of user.
     * @param email     email id of user.
     * @param langKey   language key.
     * @param imageUrl  image URL of user.
     * @param cardNumber card number of user.
     * @param phone phone number of user.
     */
    public void updateUser(
        String firstName,
        String lastName,
        String email,
        String langKey,
        String imageUrl,
        String cardNumber,
        String phone,
        LoyaltyLevel loyaltyLevel
    ) {
        SecurityUtils.getCurrentUserLogin()
            .flatMap(userRepository::findOneByLogin)
            .ifPresent(user -> {
                user.setFirstName(firstName);
                user.setLastName(lastName);
                if (email != null) {
                    user.setEmail(email.toLowerCase());
                }
                user.setLangKey(langKey);
                user.setImageUrl(imageUrl);
                user.setCardNumber(cardNumber);
                user.setPhone(phone);
                user.setLoyaltyLevel(loyaltyLevel);
                userRepository.save(user);
                log.debug("Changed Information for User: {}", user);
            });
    }

    @Transactional(readOnly = true)
    public Page<AdminUserDTO> getAllManagedUsers(Pageable pageable) {
        return userRepository.findAll(pageable).map(AdminUserDTO::new);
    }

    @Transactional(readOnly = true)
    public Page<UserDTO> getAllPublicUsers(Pageable pageable) {
        return userRepository.findAllByIdNotNullAndActivatedIsTrue(pageable).map(UserDTO::new);
    }

    @Transactional(readOnly = true)
    public Optional<User> getUserWithAuthoritiesByLogin(String login) {
        return userRepository.findOneWithAuthoritiesByLogin(login);
    }

    /**
     * Gets a list of all the authorities.
     * @return a list of all the authorities.
     */
    @Transactional(readOnly = true)
    public List<String> getAuthorities() {
        return authorityRepository.findAll().stream().map(Authority::getName).toList();
    }

    private User syncUserWithIdP(Map<String, Object> details, User user) {
        Collection<String> dbAuthorities = getAuthorities();
        Collection<String> userAuthorities = user.getAuthorities().stream().map(Authority::getName).toList();
        for (String authority : userAuthorities) {
            if (!dbAuthorities.contains(authority)) {
                log.debug("Saving authority '{}' in local database", authority);
                Authority authorityToSave = new Authority();
                authorityToSave.setName(authority);
                authorityRepository.save(authorityToSave);
            }
        }
        Optional<User> existingUser = userRepository.findOneByLogin(user.getLogin());
        if (existingUser.isPresent()) {
            LoyaltyLevel newLoyaltyLevel = null;
            if (user.getAuthorities().stream().noneMatch(authority -> authority.getName().equals("ROLE_ADMIN"))) {
                UserExtra userExtra = userExtraRepository
                    .findById(user.getId())
                    .orElseThrow(() -> new RuntimeException("UserExtra not found"));

                newLoyaltyLevel = loyaltyLevelService.determineNewLoyaltyLevel(userExtra.getTotalBalance());
            }

            if (details.get("updated_at") != null) {
                Instant dbModifiedDate = existingUser.orElseThrow().getLastModifiedDate();
                Instant idpModifiedDate;
                if (details.get("updated_at") instanceof Instant) {
                    idpModifiedDate = (Instant) details.get("updated_at");
                } else {
                    idpModifiedDate = Instant.ofEpochSecond((Integer) details.get("updated_at"));
                }
                if (idpModifiedDate.isAfter(dbModifiedDate)) {
                    log.debug("Updating user '{}' in local database", user.getLogin());
                    updateUser(
                        user.getFirstName(),
                        user.getLastName(),
                        user.getEmail(),
                        user.getLangKey(),
                        user.getImageUrl(),
                        user.getCardNumber(),
                        user.getPhone(),
                        newLoyaltyLevel
                    );
                }
            } else {
                log.debug("Updating user '{}' in local database", user.getLogin());
                updateUser(
                    user.getFirstName(),
                    user.getLastName(),
                    user.getEmail(),
                    user.getLangKey(),
                    user.getImageUrl(),
                    user.getCardNumber(),
                    user.getPhone(),
                    newLoyaltyLevel
                );
            }
        } else {
            log.debug("Saving user '{}' in local database", user.getLogin());

            if (userAuthorities.stream().noneMatch(authority -> authority.equals("ROLE_ADMIN"))) {
                user.setLoyaltyLevel(
                    loyaltyLevelRepository.findByMinBalance(0L).isPresent() ? loyaltyLevelRepository.findByMinBalance(0L).get() : null
                );
            } else {
                user.setLoyaltyLevel(null);
            }
            saveUserWithExtra(user);
        }
        return user;
    }

    @Transactional
    public void saveUserWithExtra(User user) {
        // Save or update the user first
        User existingUser = userRepository.findById(user.getId()).orElse(userRepository.save(user)); // Save new or retrieve existing

        if (existingUser.getAuthorities().stream().anyMatch(authority -> authority.getName().equals("ROLE_ADMIN"))) {
            return;
        }

        // Create UserExtra for the user
        UserExtra userExtra = new UserExtra();
        userExtra.setUser(existingUser); // Link UserExtra to the saved user
        userExtra.setTotalBalance(0L);
        userExtra.setActualBalance(0L);

        // Save UserExtra (should not be a problem if user is properly managed)
        userExtraRepository.save(userExtra);
    }

    /**
     * Returns the user from an OAuth 2.0 login or resource server with JWT.
     * Synchronizes the user in the local repository.
     *
     * @param authToken the authentication token.
     * @return the user from the authentication.
     */
    @Transactional
    public AdminUserDTO getUserFromAuthentication(AbstractAuthenticationToken authToken) {
        Map<String, Object> attributes;
        if (authToken instanceof OAuth2AuthenticationToken) {
            attributes = ((OAuth2AuthenticationToken) authToken).getPrincipal().getAttributes();
        } else if (authToken instanceof JwtAuthenticationToken) {
            attributes = ((JwtAuthenticationToken) authToken).getTokenAttributes();
        } else {
            throw new IllegalArgumentException("AuthenticationToken is not OAuth2 or JWT!");
        }

        User user = getUser(attributes);
        user.setAuthorities(
            authToken
                .getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .map(authority -> {
                    Authority auth = new Authority();
                    auth.setName(authority);
                    return auth;
                })
                .collect(Collectors.toSet())
        );

        return new AdminUserDTO(syncUserWithIdP(attributes, user));
    }

    private static User getUser(Map<String, Object> details) {
        User user = new User();
        Boolean activated = Boolean.TRUE;
        String sub = String.valueOf(details.get("sub"));
        String username = null;
        if (details.get("preferred_username") != null) {
            username = ((String) details.get("preferred_username")).toLowerCase();
        }
        if (details.get("uid") != null) {
            user.setId((String) details.get("uid"));
            user.setLogin(sub);
        } else {
            user.setId(sub);
        }
        if (username != null) {
            user.setLogin(username);
        } else if (user.getLogin() == null) {
            user.setLogin(user.getId());
        }
        if (details.get("given_name") != null) {
            user.setFirstName((String) details.get("given_name"));
        } else if (details.get("name") != null) {
            user.setFirstName((String) details.get("name"));
        }
        if (details.get("family_name") != null) {
            user.setLastName((String) details.get("family_name"));
        }
        if (details.get("email_verified") != null) {
            activated = (Boolean) details.get("email_verified");
        }
        if (details.get("email") != null) {
            user.setEmail(((String) details.get("email")).toLowerCase());
        } else if (sub.contains("|") && (username != null && username.contains("@"))) {
            user.setEmail(username);
        } else {
            user.setEmail(sub);
        }
        if (details.get("langKey") != null) {
            user.setLangKey((String) details.get("langKey"));
        } else if (details.get("locale") != null) {
            String locale = (String) details.get("locale");
            if (locale.contains("_")) {
                locale = locale.substring(0, locale.indexOf('_'));
            } else if (locale.contains("-")) {
                locale = locale.substring(0, locale.indexOf('-'));
            }
            user.setLangKey(locale.toLowerCase());
        } else {
            user.setLangKey(Constants.DEFAULT_LANGUAGE);
        }

        if (details.get("picture") != null) {
            user.setImageUrl((String) details.get("picture"));
        }

        if (details.get("cardNumber") != null) {
            user.setCardNumber((String) details.get("cardNumber"));
        }

        if (details.get("phone") != null) {
            user.setPhone((String) details.get("phone"));
        }

        user.setActivated(activated);
        return user;
    }
}
