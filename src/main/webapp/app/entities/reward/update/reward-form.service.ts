import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IReward, NewReward } from '../reward.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IReward for edit and NewRewardFormGroupInput for create.
 */
type RewardFormGroupInput = IReward | PartialWithRequiredKeyOf<NewReward>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IReward | NewReward> = Omit<T, 'createdAt' | 'fromDate' | 'toDate'> & {
  createdAt?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
};

type RewardFormRawValue = FormValueOf<IReward>;

type NewRewardFormRawValue = FormValueOf<NewReward>;

type RewardFormDefaults = Pick<NewReward, 'id' | 'createdAt' | 'fromDate' | 'toDate'>;

type RewardFormGroupContent = {
  id: FormControl<RewardFormRawValue['id'] | NewReward['id']>;
  createdAt: FormControl<RewardFormRawValue['createdAt']>;
  fromDate: FormControl<RewardFormRawValue['fromDate']>;
  toDate: FormControl<RewardFormRawValue['toDate']>;
  code: FormControl<RewardFormRawValue['code']>;
  rewardConfig: FormControl<RewardFormRawValue['rewardConfig']>;
  user: FormControl<RewardFormRawValue['user']>;
};

export type RewardFormGroup = FormGroup<RewardFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class RewardFormService {
  createRewardFormGroup(reward: RewardFormGroupInput = { id: null }): RewardFormGroup {
    const rewardRawValue = this.convertRewardToRewardRawValue({
      ...this.getFormDefaults(),
      ...reward,
    });
    return new FormGroup<RewardFormGroupContent>({
      id: new FormControl(
        { value: rewardRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      createdAt: new FormControl(rewardRawValue.createdAt, {
        validators: [Validators.required],
      }),
      fromDate: new FormControl(rewardRawValue.fromDate, {
        validators: [Validators.required],
      }),
      toDate: new FormControl(rewardRawValue.toDate, {
        validators: [Validators.required],
      }),
      code: new FormControl(rewardRawValue.code, {
        validators: [Validators.required],
      }),
      rewardConfig: new FormControl(rewardRawValue.rewardConfig),
      user: new FormControl(rewardRawValue.user, {
        validators: [Validators.required],
      }),
    });
  }

  getReward(form: RewardFormGroup): IReward | NewReward {
    return this.convertRewardRawValueToReward(form.getRawValue() as RewardFormRawValue | NewRewardFormRawValue);
  }

  resetForm(form: RewardFormGroup, reward: RewardFormGroupInput): void {
    const rewardRawValue = this.convertRewardToRewardRawValue({ ...this.getFormDefaults(), ...reward });
    form.reset(
      {
        ...rewardRawValue,
        id: { value: rewardRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): RewardFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      createdAt: currentTime,
      fromDate: currentTime,
      toDate: currentTime,
    };
  }

  private convertRewardRawValueToReward(rawReward: RewardFormRawValue | NewRewardFormRawValue): IReward | NewReward {
    return {
      ...rawReward,
      createdAt: dayjs(rawReward.createdAt, DATE_TIME_FORMAT),
      fromDate: dayjs(rawReward.fromDate, DATE_TIME_FORMAT),
      toDate: dayjs(rawReward.toDate, DATE_TIME_FORMAT),
    };
  }

  private convertRewardToRewardRawValue(
    reward: IReward | (Partial<NewReward> & RewardFormDefaults),
  ): RewardFormRawValue | PartialWithRequiredKeyOf<NewRewardFormRawValue> {
    return {
      ...reward,
      createdAt: reward.createdAt ? reward.createdAt.format(DATE_TIME_FORMAT) : undefined,
      fromDate: reward.fromDate ? reward.fromDate.format(DATE_TIME_FORMAT) : undefined,
      toDate: reward.toDate ? reward.toDate.format(DATE_TIME_FORMAT) : undefined,
    };
  }
}
