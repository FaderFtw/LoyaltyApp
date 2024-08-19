package com.satoripop.loyalityapp.web.rest;

import com.satoripop.loyalityapp.repository.LoyaltyLevelRepository;
import com.satoripop.loyalityapp.service.LoyaltyLevelService;
import com.satoripop.loyalityapp.service.dto.LoyaltyLevelDTO;
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
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.satoripop.loyalityapp.domain.LoyaltyLevel}.
 */
@RestController
@RequestMapping("/api/loyalty-levels")
public class LoyaltyLevelResource {

    private static final Logger log = LoggerFactory.getLogger(LoyaltyLevelResource.class);

    private static final String ENTITY_NAME = "loyaltyLevel";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final LoyaltyLevelService loyaltyLevelService;

    private final LoyaltyLevelRepository loyaltyLevelRepository;

    public LoyaltyLevelResource(LoyaltyLevelService loyaltyLevelService, LoyaltyLevelRepository loyaltyLevelRepository) {
        this.loyaltyLevelService = loyaltyLevelService;
        this.loyaltyLevelRepository = loyaltyLevelRepository;
    }

    /**
     * {@code POST  /loyalty-levels} : Create a new loyaltyLevel.
     *
     * @param loyaltyLevelDTO the loyaltyLevelDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new loyaltyLevelDTO, or with status {@code 400 (Bad Request)} if the loyaltyLevel has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<LoyaltyLevelDTO> createLoyaltyLevel(@Valid @RequestBody LoyaltyLevelDTO loyaltyLevelDTO)
        throws URISyntaxException {
        log.debug("REST request to save LoyaltyLevel : {}", loyaltyLevelDTO);
        if (loyaltyLevelDTO.getId() != null) {
            throw new BadRequestAlertException("A new loyaltyLevel cannot already have an ID", ENTITY_NAME, "idexists");
        }
        loyaltyLevelDTO = loyaltyLevelService.save(loyaltyLevelDTO);
        return ResponseEntity.created(new URI("/api/loyalty-levels/" + loyaltyLevelDTO.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, loyaltyLevelDTO.getId().toString()))
            .body(loyaltyLevelDTO);
    }

    /**
     * {@code PUT  /loyalty-levels/:id} : Updates an existing loyaltyLevel.
     *
     * @param id the id of the loyaltyLevelDTO to save.
     * @param loyaltyLevelDTO the loyaltyLevelDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated loyaltyLevelDTO,
     * or with status {@code 400 (Bad Request)} if the loyaltyLevelDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the loyaltyLevelDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<LoyaltyLevelDTO> updateLoyaltyLevel(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody LoyaltyLevelDTO loyaltyLevelDTO
    ) throws URISyntaxException {
        log.debug("REST request to update LoyaltyLevel : {}, {}", id, loyaltyLevelDTO);
        if (loyaltyLevelDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, loyaltyLevelDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!loyaltyLevelRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        loyaltyLevelDTO = loyaltyLevelService.update(loyaltyLevelDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, loyaltyLevelDTO.getId().toString()))
            .body(loyaltyLevelDTO);
    }

    /**
     * {@code PATCH  /loyalty-levels/:id} : Partial updates given fields of an existing loyaltyLevel, field will ignore if it is null
     *
     * @param id the id of the loyaltyLevelDTO to save.
     * @param loyaltyLevelDTO the loyaltyLevelDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated loyaltyLevelDTO,
     * or with status {@code 400 (Bad Request)} if the loyaltyLevelDTO is not valid,
     * or with status {@code 404 (Not Found)} if the loyaltyLevelDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the loyaltyLevelDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<LoyaltyLevelDTO> partialUpdateLoyaltyLevel(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody LoyaltyLevelDTO loyaltyLevelDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update LoyaltyLevel partially : {}, {}", id, loyaltyLevelDTO);
        if (loyaltyLevelDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, loyaltyLevelDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!loyaltyLevelRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<LoyaltyLevelDTO> result = loyaltyLevelService.partialUpdate(loyaltyLevelDTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, loyaltyLevelDTO.getId().toString())
        );
    }

    /**
     * {@code GET  /loyalty-levels} : get all the loyaltyLevels.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of loyaltyLevels in body.
     */
    @GetMapping("")
    public ResponseEntity<List<LoyaltyLevelDTO>> getAllLoyaltyLevels(@org.springdoc.core.annotations.ParameterObject Pageable pageable) {
        log.debug("REST request to get a page of LoyaltyLevels");
        Page<LoyaltyLevelDTO> page = loyaltyLevelService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /loyalty-levels/:id} : get the "id" loyaltyLevel.
     *
     * @param id the id of the loyaltyLevelDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the loyaltyLevelDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<LoyaltyLevelDTO> getLoyaltyLevel(@PathVariable("id") Long id) {
        log.debug("REST request to get LoyaltyLevel : {}", id);
        Optional<LoyaltyLevelDTO> loyaltyLevelDTO = loyaltyLevelService.findOne(id);
        return ResponseUtil.wrapOrNotFound(loyaltyLevelDTO);
    }

    /**
     * {@code DELETE  /loyalty-levels/:id} : delete the "id" loyaltyLevel.
     *
     * @param id the id of the loyaltyLevelDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLoyaltyLevel(@PathVariable("id") Long id) {
        log.debug("REST request to delete LoyaltyLevel : {}", id);
        loyaltyLevelService.delete(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
