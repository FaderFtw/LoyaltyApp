import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import dayjs from 'dayjs/esm';
import { DATE_TIME_FORMAT } from 'app/config/input.constants';
import { IOffer, NewOffer } from '../offer.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IOffer for edit and NewOfferFormGroupInput for create.
 */
type OfferFormGroupInput = IOffer | PartialWithRequiredKeyOf<NewOffer>;

/**
 * Type that converts some properties for forms.
 */
type FormValueOf<T extends IOffer | NewOffer> = Omit<T, 'fromDate' | 'toDate'> & {
  fromDate?: string | null;
  toDate?: string | null;
};

type OfferFormRawValue = FormValueOf<IOffer>;

type NewOfferFormRawValue = FormValueOf<NewOffer>;

type OfferFormDefaults = Pick<NewOffer, 'id' | 'fromDate' | 'toDate' | 'loyaltyLevels'>;

type OfferFormGroupContent = {
  id: FormControl<OfferFormRawValue['id'] | NewOffer['id']>;
  fromDate: FormControl<OfferFormRawValue['fromDate']>;
  toDate: FormControl<OfferFormRawValue['toDate']>;
  title: FormControl<OfferFormRawValue['title']>;
  description: FormControl<OfferFormRawValue['description']>;
  rewardPoints: FormControl<OfferFormRawValue['rewardPoints']>;
  itemQty: FormControl<OfferFormRawValue['itemQty']>;
  itemSku: FormControl<OfferFormRawValue['itemSku']>;
  grandTotal: FormControl<OfferFormRawValue['grandTotal']>;
  loyaltyLevels: FormControl<OfferFormRawValue['loyaltyLevels']>;
};

export type OfferFormGroup = FormGroup<OfferFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class OfferFormService {
  createOfferFormGroup(offer: OfferFormGroupInput = { id: null }): OfferFormGroup {
    const offerRawValue = this.convertOfferToOfferRawValue({
      ...this.getFormDefaults(),
      ...offer,
    });
    return new FormGroup<OfferFormGroupContent>({
      id: new FormControl(
        { value: offerRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      fromDate: new FormControl(offerRawValue.fromDate, {
        validators: [Validators.required],
      }),
      toDate: new FormControl(offerRawValue.toDate, {
        validators: [Validators.required],
      }),
      title: new FormControl(offerRawValue.title, {
        validators: [Validators.required],
      }),
      description: new FormControl(offerRawValue.description),
      rewardPoints: new FormControl(offerRawValue.rewardPoints),
      itemQty: new FormControl(offerRawValue.itemQty),
      itemSku: new FormControl(offerRawValue.itemSku),
      grandTotal: new FormControl(offerRawValue.grandTotal),
      loyaltyLevels: new FormControl(offerRawValue.loyaltyLevels ?? []),
    });
  }

  getOffer(form: OfferFormGroup): IOffer | NewOffer {
    return this.convertOfferRawValueToOffer(form.getRawValue() as OfferFormRawValue | NewOfferFormRawValue);
  }

  resetForm(form: OfferFormGroup, offer: OfferFormGroupInput): void {
    const offerRawValue = this.convertOfferToOfferRawValue({ ...this.getFormDefaults(), ...offer });
    form.reset(
      {
        ...offerRawValue,
        id: { value: offerRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): OfferFormDefaults {
    const currentTime = dayjs();

    return {
      id: null,
      fromDate: currentTime,
      toDate: currentTime,
      loyaltyLevels: [],
    };
  }

  private convertOfferRawValueToOffer(rawOffer: OfferFormRawValue | NewOfferFormRawValue): IOffer | NewOffer {
    return {
      ...rawOffer,
      fromDate: dayjs(rawOffer.fromDate, DATE_TIME_FORMAT),
      toDate: dayjs(rawOffer.toDate, DATE_TIME_FORMAT),
    };
  }

  private convertOfferToOfferRawValue(
    offer: IOffer | (Partial<NewOffer> & OfferFormDefaults),
  ): OfferFormRawValue | PartialWithRequiredKeyOf<NewOfferFormRawValue> {
    return {
      ...offer,
      fromDate: offer.fromDate ? offer.fromDate.format(DATE_TIME_FORMAT) : undefined,
      toDate: offer.toDate ? offer.toDate.format(DATE_TIME_FORMAT) : undefined,
      loyaltyLevels: offer.loyaltyLevels ?? [],
    };
  }
}
