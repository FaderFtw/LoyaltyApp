import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IRewardConfig, NewRewardConfig } from '../reward-config.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IRewardConfig for edit and NewRewardConfigFormGroupInput for create.
 */
type RewardConfigFormGroupInput = IRewardConfig | PartialWithRequiredKeyOf<NewRewardConfig>;

type RewardConfigFormDefaults = Pick<NewRewardConfig, 'id' | 'loyaltyLevels'>;

type RewardConfigFormGroupContent = {
  id: FormControl<IRewardConfig['id'] | NewRewardConfig['id']>;
  title: FormControl<IRewardConfig['title']>;
  description: FormControl<IRewardConfig['description']>;
  balanceValue: FormControl<IRewardConfig['balanceValue']>;
  convertedValue: FormControl<IRewardConfig['convertedValue']>;
  daysToExpire: FormControl<IRewardConfig['daysToExpire']>;
  loyaltyLevels: FormControl<IRewardConfig['loyaltyLevels']>;
};

export type RewardConfigFormGroup = FormGroup<RewardConfigFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class RewardConfigFormService {
  createRewardConfigFormGroup(rewardConfig: RewardConfigFormGroupInput = { id: null }): RewardConfigFormGroup {
    const rewardConfigRawValue = {
      ...this.getFormDefaults(),
      ...rewardConfig,
    };
    return new FormGroup<RewardConfigFormGroupContent>({
      id: new FormControl(
        { value: rewardConfigRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      title: new FormControl(rewardConfigRawValue.title, {
        validators: [Validators.required],
      }),
      description: new FormControl(rewardConfigRawValue.description),
      balanceValue: new FormControl(rewardConfigRawValue.balanceValue, { validators: [Validators.required] }),
      convertedValue: new FormControl(rewardConfigRawValue.convertedValue, { validators: [Validators.required] }),
      daysToExpire: new FormControl(rewardConfigRawValue.daysToExpire),
      loyaltyLevels: new FormControl(rewardConfigRawValue.loyaltyLevels ?? [], { validators: [Validators.required] }),
    });
  }

  getRewardConfig(form: RewardConfigFormGroup): IRewardConfig | NewRewardConfig {
    return form.getRawValue() as IRewardConfig | NewRewardConfig;
  }

  resetForm(form: RewardConfigFormGroup, rewardConfig: RewardConfigFormGroupInput): void {
    const rewardConfigRawValue = { ...this.getFormDefaults(), ...rewardConfig };
    form.reset(
      {
        ...rewardConfigRawValue,
        id: { value: rewardConfigRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): RewardConfigFormDefaults {
    return {
      id: null,
      loyaltyLevels: [],
    };
  }
}
