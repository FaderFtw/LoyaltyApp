import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ILoyaltyLevel, NewLoyaltyLevel } from '../loyalty-level.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ILoyaltyLevel for edit and NewLoyaltyLevelFormGroupInput for create.
 */
type LoyaltyLevelFormGroupInput = ILoyaltyLevel | PartialWithRequiredKeyOf<NewLoyaltyLevel>;

type LoyaltyLevelFormDefaults = Pick<NewLoyaltyLevel, 'id' | 'offers' | 'rewards'>;

type LoyaltyLevelFormGroupContent = {
  id: FormControl<ILoyaltyLevel['id'] | NewLoyaltyLevel['id']>;
  title: FormControl<ILoyaltyLevel['title']>;
  description: FormControl<ILoyaltyLevel['description']>;
  minBalance: FormControl<ILoyaltyLevel['minBalance']>;
  maxBalance: FormControl<ILoyaltyLevel['maxBalance']>;
  offers: FormControl<ILoyaltyLevel['offers']>;
  rewards: FormControl<ILoyaltyLevel['rewards']>;
};

export type LoyaltyLevelFormGroup = FormGroup<LoyaltyLevelFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class LoyaltyLevelFormService {
  createLoyaltyLevelFormGroup(loyaltyLevel: LoyaltyLevelFormGroupInput = { id: null }): LoyaltyLevelFormGroup {
    const loyaltyLevelRawValue = {
      ...this.getFormDefaults(),
      ...loyaltyLevel,
    };
    return new FormGroup<LoyaltyLevelFormGroupContent>({
      id: new FormControl(
        { value: loyaltyLevelRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      title: new FormControl(loyaltyLevelRawValue.title),
      description: new FormControl(loyaltyLevelRawValue.description),
      minBalance: new FormControl(loyaltyLevelRawValue.minBalance, {
        validators: [Validators.required],
      }),
      maxBalance: new FormControl(loyaltyLevelRawValue.maxBalance, {
        validators: [Validators.required],
      }),
      offers: new FormControl(loyaltyLevelRawValue.offers ?? []),
      rewards: new FormControl(loyaltyLevelRawValue.rewards ?? []),
    });
  }

  getLoyaltyLevel(form: LoyaltyLevelFormGroup): ILoyaltyLevel | NewLoyaltyLevel {
    return form.getRawValue() as ILoyaltyLevel | NewLoyaltyLevel;
  }

  resetForm(form: LoyaltyLevelFormGroup, loyaltyLevel: LoyaltyLevelFormGroupInput): void {
    const loyaltyLevelRawValue = { ...this.getFormDefaults(), ...loyaltyLevel };
    form.reset(
      {
        ...loyaltyLevelRawValue,
        id: { value: loyaltyLevelRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): LoyaltyLevelFormDefaults {
    return {
      id: null,
      offers: [],
      rewards: [],
    };
  }
}
