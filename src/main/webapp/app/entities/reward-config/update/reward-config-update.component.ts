import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ILoyaltyLevel } from 'app/entities/loyalty-level/loyalty-level.model';
import { LoyaltyLevelService } from 'app/entities/loyalty-level/service/loyalty-level.service';
import { RewardType } from 'app/entities/enumerations/reward-type.model';
import { RewardConfigService } from '../service/reward-config.service';
import { IRewardConfig } from '../reward-config.model';
import { RewardConfigFormService, RewardConfigFormGroup } from './reward-config-form.service';

@Component({
  standalone: true,
  selector: 'jhi-reward-config-update',
  templateUrl: './reward-config-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class RewardConfigUpdateComponent implements OnInit {
  isSaving = false;
  rewardConfig: IRewardConfig | null = null;
  rewardTypeValues = Object.keys(RewardType);

  loyaltyLevelsSharedCollection: ILoyaltyLevel[] = [];

  protected rewardConfigService = inject(RewardConfigService);
  protected rewardConfigFormService = inject(RewardConfigFormService);
  protected loyaltyLevelService = inject(LoyaltyLevelService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: RewardConfigFormGroup = this.rewardConfigFormService.createRewardConfigFormGroup();

  compareLoyaltyLevel = (o1: ILoyaltyLevel | null, o2: ILoyaltyLevel | null): boolean =>
    this.loyaltyLevelService.compareLoyaltyLevel(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ rewardConfig }) => {
      this.rewardConfig = rewardConfig;
      if (rewardConfig) {
        this.updateForm(rewardConfig);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const rewardConfig = this.rewardConfigFormService.getRewardConfig(this.editForm);
    if (rewardConfig.id !== null) {
      this.subscribeToSaveResponse(this.rewardConfigService.update(rewardConfig));
    } else {
      this.subscribeToSaveResponse(this.rewardConfigService.create(rewardConfig));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IRewardConfig>>): void {
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

  protected updateForm(rewardConfig: IRewardConfig): void {
    this.rewardConfig = rewardConfig;
    this.rewardConfigFormService.resetForm(this.editForm, rewardConfig);

    this.loyaltyLevelsSharedCollection = this.loyaltyLevelService.addLoyaltyLevelToCollectionIfMissing<ILoyaltyLevel>(
      this.loyaltyLevelsSharedCollection,
      ...(rewardConfig.loyaltyLevels ?? []),
    );
  }

  protected loadRelationshipsOptions(): void {
    this.loyaltyLevelService
      .query()
      .pipe(map((res: HttpResponse<ILoyaltyLevel[]>) => res.body ?? []))
      .pipe(
        map((loyaltyLevels: ILoyaltyLevel[]) =>
          this.loyaltyLevelService.addLoyaltyLevelToCollectionIfMissing<ILoyaltyLevel>(
            loyaltyLevels,
            ...(this.rewardConfig?.loyaltyLevels ?? []),
          ),
        ),
      )
      .subscribe((loyaltyLevels: ILoyaltyLevel[]) => (this.loyaltyLevelsSharedCollection = loyaltyLevels));
  }
}
