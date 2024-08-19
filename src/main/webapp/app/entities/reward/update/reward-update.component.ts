import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IRewardConfig } from 'app/entities/reward-config/reward-config.model';
import { RewardConfigService } from 'app/entities/reward-config/service/reward-config.service';
import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/service/user.service';
import { RewardService } from '../service/reward.service';
import { IReward } from '../reward.model';
import { RewardFormService, RewardFormGroup } from './reward-form.service';

@Component({
  standalone: true,
  selector: 'jhi-reward-update',
  templateUrl: './reward-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class RewardUpdateComponent implements OnInit {
  isSaving = false;
  reward: IReward | null = null;

  rewardConfigsSharedCollection: IRewardConfig[] = [];
  usersSharedCollection: IUser[] = [];

  protected rewardService = inject(RewardService);
  protected rewardFormService = inject(RewardFormService);
  protected rewardConfigService = inject(RewardConfigService);
  protected userService = inject(UserService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: RewardFormGroup = this.rewardFormService.createRewardFormGroup();

  compareRewardConfig = (o1: IRewardConfig | null, o2: IRewardConfig | null): boolean =>
    this.rewardConfigService.compareRewardConfig(o1, o2);

  compareUser = (o1: IUser | null, o2: IUser | null): boolean => this.userService.compareUser(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ reward }) => {
      this.reward = reward;
      if (reward) {
        this.updateForm(reward);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const reward = this.rewardFormService.getReward(this.editForm);
    if (reward.id !== null) {
      this.subscribeToSaveResponse(this.rewardService.update(reward));
    } else {
      this.subscribeToSaveResponse(this.rewardService.create(reward));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IReward>>): void {
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

  protected updateForm(reward: IReward): void {
    this.reward = reward;
    this.rewardFormService.resetForm(this.editForm, reward);

    this.rewardConfigsSharedCollection = this.rewardConfigService.addRewardConfigToCollectionIfMissing<IRewardConfig>(
      this.rewardConfigsSharedCollection,
      reward.rewardConfig,
    );
    this.usersSharedCollection = this.userService.addUserToCollectionIfMissing<IUser>(this.usersSharedCollection, reward.user);
  }

  protected loadRelationshipsOptions(): void {
    this.rewardConfigService
      .query()
      .pipe(map((res: HttpResponse<IRewardConfig[]>) => res.body ?? []))
      .pipe(
        map((rewardConfigs: IRewardConfig[]) =>
          this.rewardConfigService.addRewardConfigToCollectionIfMissing<IRewardConfig>(rewardConfigs, this.reward?.rewardConfig),
        ),
      )
      .subscribe((rewardConfigs: IRewardConfig[]) => (this.rewardConfigsSharedCollection = rewardConfigs));

    this.userService
      .query()
      .pipe(
        map((res: HttpResponse<IUser[]>) => res.body ?? []), // Get users from the response
        map((users: IUser[]) => {
          // Filter out users with ROLE_ADMIN
          // @ts-ignore
          const filteredUsers = users.filter(user => !user.authorities.some(authority => authority.name === 'ROLE_ADMIN'));
          return this.userService.addUserToCollectionIfMissing<IUser>(filteredUsers, this.reward?.user);
        }),
      )
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
  }
}
