package com.satoripop.loyalityapp.web.rest;

import com.satoripop.loyalityapp.domain.RewardConfig;
import com.satoripop.loyalityapp.repository.RewardConfigRepository;
import com.satoripop.loyalityapp.service.RewardConfigService;
import com.satoripop.loyalityapp.service.dto.RewardConfigDTO;
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
import org.springframework.dao.DataIntegrityViolationException;
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
 * REST controller for managing {@link com.satoripop.loyalityapp.domain.RewardConfig}.
 */
@RestController
@RequestMapping("/api/reward-configs")
public class RewardConfigResource {

    private static final Logger log = LoggerFactory.getLogger(RewardConfigResource.class);

    private static final String ENTITY_NAME = "rewardConfig";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final RewardConfigService rewardConfigService;

    private final RewardConfigRepository rewardConfigRepository;

    public RewardConfigResource(RewardConfigService rewardConfigService, RewardConfigRepository rewardConfigRepository) {
        this.rewardConfigService = rewardConfigService;
        this.rewardConfigRepository = rewardConfigRepository;
    }

    /**
     * {@code POST  /reward-configs} : Create a new rewardConfig.
     *
     * @param rewardConfigDTO the rewardConfigDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new rewardConfigDTO, or with status {@code 400 (Bad Request)} if the rewardConfig has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<RewardConfigDTO> createRewardConfig(@Valid @RequestBody RewardConfigDTO rewardConfigDTO)
        throws URISyntaxException {
        log.debug("REST request to save RewardConfig : {}", rewardConfigDTO);
        if (rewardConfigDTO.getId() != null) {
            throw new BadRequestAlertException("A new rewardConfig cannot already have an ID", ENTITY_NAME, "idexists");
        }
        rewardConfigDTO = rewardConfigService.save(rewardConfigDTO);
        return ResponseEntity.created(new URI("/api/reward-configs/" + rewardConfigDTO.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, rewardConfigDTO.getId().toString()))
            .body(rewardConfigDTO);
    }

    /**
     * {@code PUT  /reward-configs/:id} : Updates an existing rewardConfig.
     *
     * @param id the id of the rewardConfigDTO to save.
     * @param rewardConfigDTO the rewardConfigDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated rewardConfigDTO,
     * or with status {@code 400 (Bad Request)} if the rewardConfigDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the rewardConfigDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<RewardConfigDTO> updateRewardConfig(
        @PathVariable(value = "id", required = false) final Long id,
        @Valid @RequestBody RewardConfigDTO rewardConfigDTO
    ) throws URISyntaxException {
        log.debug("REST request to update RewardConfig : {}, {}", id, rewardConfigDTO);
        if (rewardConfigDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, rewardConfigDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!rewardConfigRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        rewardConfigDTO = rewardConfigService.update(rewardConfigDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, rewardConfigDTO.getId().toString()))
            .body(rewardConfigDTO);
    }

    /**
     * {@code PATCH  /reward-configs/:id} : Partial updates given fields of an existing rewardConfig, field will ignore if it is null
     *
     * @param id the id of the rewardConfigDTO to save.
     * @param rewardConfigDTO the rewardConfigDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated rewardConfigDTO,
     * or with status {@code 400 (Bad Request)} if the rewardConfigDTO is not valid,
     * or with status {@code 404 (Not Found)} if the rewardConfigDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the rewardConfigDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<RewardConfigDTO> partialUpdateRewardConfig(
        @PathVariable(value = "id", required = false) final Long id,
        @NotNull @RequestBody RewardConfigDTO rewardConfigDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update RewardConfig partially : {}, {}", id, rewardConfigDTO);
        if (rewardConfigDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, rewardConfigDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!rewardConfigRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<RewardConfigDTO> result = rewardConfigService.partialUpdate(rewardConfigDTO);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, rewardConfigDTO.getId().toString())
        );
    }

    /**
     * {@code GET  /reward-configs} : get all the rewardConfigs.
     *
     * @param pageable the pagination information.
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of rewardConfigs in body.
     */
    @GetMapping("")
    public ResponseEntity<List<RewardConfigDTO>> getAllRewardConfigs(
        @org.springdoc.core.annotations.ParameterObject Pageable pageable,
        @RequestParam(name = "eagerload", required = false, defaultValue = "true") boolean eagerload
    ) {
        log.debug("REST request to get a page of RewardConfigs");
        Page<RewardConfigDTO> page;
        if (eagerload) {
            page = rewardConfigService.findAllWithEagerRelationships(pageable);
        } else {
            page = rewardConfigService.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /reward-configs/:id} : get the "id" rewardConfig.
     *
     * @param id the id of the rewardConfigDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the rewardConfigDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<RewardConfig> getRewardConfig(@PathVariable("id") Long id) {
        log.debug("REST request to get RewardConfig : {}", id);
        Optional<RewardConfig> rewardConfig = rewardConfigService.findOne(id);
        return ResponseUtil.wrapOrNotFound(rewardConfig);
    }

    /**
     * {@code DELETE  /reward-configs/:id} : delete the "id" rewardConfig.
     *
     * @param id the id of the rewardConfigDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRewardConfig(@PathVariable("id") Long id) {
        log.debug("REST request to delete RewardConfig : {}", id);
        try {
            rewardConfigService.delete(id);
            return ResponseEntity.noContent()
                .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
                .build();
        } catch (DataIntegrityViolationException e) {
            log.error("Error deleting RewardConfig: {}", id, e);
            String errorMessage = "Cannot delete this RewardConfig because it is related to existing Rewards.";
            return ResponseEntity.badRequest()
                .headers(HeaderUtil.createFailureAlert(applicationName, false, ENTITY_NAME, "rewardconfigdeletionerror", errorMessage))
                .body(null);
        }
    }
}
