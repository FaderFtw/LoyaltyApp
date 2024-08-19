import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ILoyaltyLevel } from 'app/entities/loyalty-level/loyalty-level.model';
import { LoyaltyLevelService } from 'app/entities/loyalty-level/service/loyalty-level.service';
import { IOffer } from '../offer.model';
import { OfferService } from '../service/offer.service';
import { OfferFormService, OfferFormGroup } from './offer-form.service';

@Component({
  standalone: true,
  selector: 'jhi-offer-update',
  templateUrl: './offer-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class OfferUpdateComponent implements OnInit {
  isSaving = false;
  offer: IOffer | null = null;

  loyaltyLevelsSharedCollection: ILoyaltyLevel[] = [];

  protected offerService = inject(OfferService);
  protected offerFormService = inject(OfferFormService);
  protected loyaltyLevelService = inject(LoyaltyLevelService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: OfferFormGroup = this.offerFormService.createOfferFormGroup();

  compareLoyaltyLevel = (o1: ILoyaltyLevel | null, o2: ILoyaltyLevel | null): boolean =>
    this.loyaltyLevelService.compareLoyaltyLevel(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ offer }) => {
      this.offer = offer;
      if (offer) {
        this.updateForm(offer);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const offer = this.offerFormService.getOffer(this.editForm);
    if (offer.id !== null) {
      this.subscribeToSaveResponse(this.offerService.update(offer));
    } else {
      this.subscribeToSaveResponse(this.offerService.create(offer));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOffer>>): void {
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

  protected updateForm(offer: IOffer): void {
    this.offer = offer;
    this.offerFormService.resetForm(this.editForm, offer);

    this.loyaltyLevelsSharedCollection = this.loyaltyLevelService.addLoyaltyLevelToCollectionIfMissing<ILoyaltyLevel>(
      this.loyaltyLevelsSharedCollection,
      ...(offer.loyaltyLevels ?? []),
    );
  }

  protected loadRelationshipsOptions(): void {
    this.loyaltyLevelService
      .query()
      .pipe(map((res: HttpResponse<ILoyaltyLevel[]>) => res.body ?? []))
      .pipe(
        map((loyaltyLevels: ILoyaltyLevel[]) =>
          this.loyaltyLevelService.addLoyaltyLevelToCollectionIfMissing<ILoyaltyLevel>(loyaltyLevels, ...(this.offer?.loyaltyLevels ?? [])),
        ),
      )
      .subscribe((loyaltyLevels: ILoyaltyLevel[]) => (this.loyaltyLevelsSharedCollection = loyaltyLevels));
  }
}
