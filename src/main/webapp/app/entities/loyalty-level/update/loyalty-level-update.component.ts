import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IOffer } from 'app/entities/offer/offer.model';
import { OfferService } from 'app/entities/offer/service/offer.service';
import { IRewardConfig } from 'app/entities/reward-config/reward-config.model';
import { RewardConfigService } from 'app/entities/reward-config/service/reward-config.service';
import { LoyaltyType } from 'app/entities/enumerations/loyalty-type.model';
import { LoyaltyLevelService } from '../service/loyalty-level.service';
import { ILoyaltyLevel } from '../loyalty-level.model';
import { LoyaltyLevelFormService, LoyaltyLevelFormGroup } from './loyalty-level-form.service';

@Component({
  standalone: true,
  selector: 'jhi-loyalty-level-update',
  templateUrl: './loyalty-level-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class LoyaltyLevelUpdateComponent implements OnInit {
  isSaving = false;
  loyaltyLevel: ILoyaltyLevel | null = null;
  loyaltyTypeValues = Object.keys(LoyaltyType);

  offersSharedCollection: IOffer[] = [];
  rewardConfigsSharedCollection: IRewardConfig[] = [];

  protected loyaltyLevelService = inject(LoyaltyLevelService);
  protected loyaltyLevelFormService = inject(LoyaltyLevelFormService);
  protected offerService = inject(OfferService);
  protected rewardConfigService = inject(RewardConfigService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: LoyaltyLevelFormGroup = this.loyaltyLevelFormService.createLoyaltyLevelFormGroup();

  compareOffer = (o1: IOffer | null, o2: IOffer | null): boolean => this.offerService.compareOffer(o1, o2);

  compareRewardConfig = (o1: IRewardConfig | null, o2: IRewardConfig | null): boolean =>
    this.rewardConfigService.compareRewardConfig(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ loyaltyLevel }) => {
      this.loyaltyLevel = loyaltyLevel;
      if (loyaltyLevel) {
        this.updateForm(loyaltyLevel);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const loyaltyLevel = this.loyaltyLevelFormService.getLoyaltyLevel(this.editForm);
    if (loyaltyLevel.id !== null) {
      this.subscribeToSaveResponse(this.loyaltyLevelService.update(loyaltyLevel));
    } else {
      this.subscribeToSaveResponse(this.loyaltyLevelService.create(loyaltyLevel));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILoyaltyLevel>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(loyaltyLevel: ILoyaltyLevel): void {
    this.loyaltyLevel = loyaltyLevel;
    this.loyaltyLevelFormService.resetForm(this.editForm, loyaltyLevel);

    this.offersSharedCollection = this.offerService.addOfferToCollectionIfMissing<IOffer>(
      this.offersSharedCollection,
      ...(loyaltyLevel.offers ?? []),
    );
    this.rewardConfigsSharedCollection = this.rewardConfigService.addRewardConfigToCollectionIfMissing<IRewardConfig>(
      this.rewardConfigsSharedCollection,
      ...(loyaltyLevel.rewards ?? []),
    );
  }

  protected loadRelationshipsOptions(): void {
    this.offerService
      .query()
      .pipe(map((res: HttpResponse<IOffer[]>) => res.body ?? []))
      .pipe(
        map((offers: IOffer[]) => this.offerService.addOfferToCollectionIfMissing<IOffer>(offers, ...(this.loyaltyLevel?.offers ?? []))),
      )
      .subscribe((offers: IOffer[]) => (this.offersSharedCollection = offers));

    this.rewardConfigService
      .query()
      .pipe(map((res: HttpResponse<IRewardConfig[]>) => res.body ?? []))
      .pipe(
        map((rewardConfigs: IRewardConfig[]) =>
          this.rewardConfigService.addRewardConfigToCollectionIfMissing<IRewardConfig>(
            rewardConfigs,
            ...(this.loyaltyLevel?.rewards ?? []),
          ),
        ),
      )
      .subscribe((rewardConfigs: IRewardConfig[]) => (this.rewardConfigsSharedCollection = rewardConfigs));
  }
}
