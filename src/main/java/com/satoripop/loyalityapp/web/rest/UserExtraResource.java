package com.satoripop.loyalityapp.web.rest;

import com.satoripop.loyalityapp.domain.UserExtra;
import com.satoripop.loyalityapp.repository.UserExtraRepository;
import com.satoripop.loyalityapp.web.rest.errors.BadRequestAlertException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.satoripop.loyalityapp.domain.UserExtra}.
 */
@RestController
@RequestMapping("/api/user-extras")
@Transactional
public class UserExtraResource {

    private static final Logger log = LoggerFactory.getLogger(UserExtraResource.class);

    private static final String ENTITY_NAME = "userExtra";
    private static final int PAGE_SIZE = 10;

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final UserExtraRepository userExtraRepository;

    public UserExtraResource(UserExtraRepository userExtraRepository) {
        this.userExtraRepository = userExtraRepository;
    }

    /**
     * {@code POST  /user-extras} : Create a new userExtra.
     *
     * @param userExtra the userExtra to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new userExtra, or with status {@code 400 (Bad Request)} if the userExtra has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<UserExtra> createUserExtra(@Valid @RequestBody UserExtra userExtra) throws URISyntaxException {
        log.debug("REST request to save UserExtra : {}", userExtra);
        if (userExtra.getId() != null) {
            throw new BadRequestAlertException("A new userExtra cannot already have an ID", ENTITY_NAME, "idexists");
        }
        userExtra = userExtraRepository.save(userExtra);
        return ResponseEntity.created(new URI("/api/user-extras/" + userExtra.getId()))
            .headers(
                HeaderUtil.createEntityCreationAlert(
                    applicationName,
                    false,
                    ENTITY_NAME,
                    userExtra.getUser().getFirstName() + " " + userExtra.getUser().getLastName()
                )
            )
            .body(userExtra);
    }

    /**
     * {@code PUT  /user-extras/:id} : Updates an existing userExtra.
     *
     * @param id the id of the userExtra to save.
     * @param userExtra the userExtra to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated userExtra,
     * or with status {@code 400 (Bad Request)} if the userExtra is not valid,
     * or with status {@code 500 (Internal Server Error)} if the userExtra couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<UserExtra> updateUserExtra(
        @PathVariable(value = "id", required = false) final String id,
        @Valid @RequestBody UserExtra userExtra
    ) throws URISyntaxException {
        log.debug("REST request to update UserExtra : {}, {}", id, userExtra);
        if (userExtra.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, userExtra.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!userExtraRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        userExtra = userExtraRepository.save(userExtra);
        return ResponseEntity.ok()
            .headers(
                HeaderUtil.createEntityUpdateAlert(
                    applicationName,
                    false,
                    ENTITY_NAME,
                    userExtra.getUser().getFirstName() + " " + userExtra.getUser().getLastName()
                )
            )
            .body(userExtra);
    }

    /**
     * {@code PATCH  /user-extras/:id} : Partial updates given fields of an existing userExtra, field will ignore if it is null
     *
     * @param id the id of the userExtra to save.
     * @param userExtra the userExtra to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated userExtra,
     * or with status {@code 400 (Bad Request)} if the userExtra is not valid,
     * or with status {@code 404 (Not Found)} if the userExtra is not found,
     * or with status {@code 500 (Internal Server Error)} if the userExtra couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<UserExtra> partialUpdateUserExtra(
        @PathVariable(value = "id", required = false) final String id,
        @NotNull @RequestBody UserExtra userExtra
    ) throws URISyntaxException {
        log.debug("REST request to partial update UserExtra partially : {}, {}", id, userExtra);
        if (userExtra.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, userExtra.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!userExtraRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<UserExtra> result = userExtraRepository
            .findById(userExtra.getId())
            .map(existingUserExtra -> {
                if (userExtra.getTotalBalance() != null) {
                    existingUserExtra.setTotalBalance(userExtra.getTotalBalance());
                }
                if (userExtra.getActualBalance() != null) {
                    existingUserExtra.setActualBalance(userExtra.getActualBalance());
                }

                return existingUserExtra;
            })
            .map(userExtraRepository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(
                applicationName,
                false,
                ENTITY_NAME,
                userExtra.getUser().getFirstName() + " " + userExtra.getUser().getLastName()
            )
        );
    }

    /**
     * {@code GET  /user-extras} : get all the userExtras.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of userExtras in body.
     */
    @GetMapping("")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<UserExtra>> getAllUserExtras(
        @RequestParam(value = "page", defaultValue = "0") int page,
        @RequestParam(value = "sort", required = false) String sort
    ) {
        log.debug("REST request to get all UserExtras");
        Pageable pageable = PageRequest.of(page, PAGE_SIZE, Sort.unsorted());

        if (sort != null) {
            String[] sortParams = sort.split(",");
            if (sortParams.length == 2) {
                String sortBy = sortParams[0];
                Sort.Direction direction = Sort.Direction.fromString(sortParams[1]);
                pageable = PageRequest.of(page, PAGE_SIZE, Sort.by(direction, sortBy));
            }
        }

        Page<UserExtra> pageResult = userExtraRepository.findAll(pageable);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-Total-Count", Long.toString(pageResult.getTotalElements()));

        return new ResponseEntity<>(pageResult.getContent(), headers, HttpStatus.OK);
    }

    /**
     * {@code GET  /user-extras/:id} : get the "id" userExtra.
     *
     * @param id the id of the userExtra to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the userExtra, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<UserExtra> getUserExtra(@PathVariable("id") String id) {
        log.debug("REST request to get UserExtra : {}", id);
        Optional<UserExtra> userExtra = userExtraRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(userExtra);
    }

    /**
     * {@code DELETE  /user-extras/:id} : delete the "id" userExtra.
     *
     * @param id the id of the userExtra to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
    public ResponseEntity<Void> deleteUserExtra(@PathVariable("id") String id) {
        log.debug("REST request to delete UserExtra : {}", id);
        userExtraRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id)).build();
    }
}
