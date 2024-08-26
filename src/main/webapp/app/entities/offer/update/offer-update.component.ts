import { Component, inject, OnInit, ElementRef } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AlertError } from 'app/shared/alert/alert-error.model';
import { EventManager, EventWithContent } from 'app/core/util/event-manager.service';
import { DataUtils, FileLoadError } from 'app/core/util/data-util.service';
import { ILoyaltyLevel } from 'app/entities/loyalty-level/loyalty-level.model';
import { LoyaltyLevelService } from 'app/entities/loyalty-level/service/loyalty-level.service';
import { OfferService } from '../service/offer.service';
import { IOffer } from '../offer.model';
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

  protected dataUtils = inject(DataUtils);
  protected eventManager = inject(EventManager);
  protected offerService = inject(OfferService);
  protected offerFormService = inject(OfferFormService);
  protected loyaltyLevelService = inject(LoyaltyLevelService);
  protected elementRef = inject(ElementRef);
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
      this.setupOptionChangeHandler();
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe({
      error: (err: FileLoadError) =>
        this.eventManager.broadcast(new EventWithContent<AlertError>('loyalityappApp.error', { message: err.message })),
    });
  }

  clearInputImage(field: string, fieldContentType: string, idInput: string): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const offer = this.offerFormService.getOffer(this.editForm);
    console.log(offer);
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

  protected onSaveError(): void {}

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

  protected setupOptionChangeHandler(): void {
    this.editForm.get('selectedOption')?.valueChanges.subscribe(selectedOption => {
      if (selectedOption === 'option1') {
        this.editForm.get('itemQty')?.setValue(null);
        this.editForm.get('itemSku')?.setValue(null);
        this.editForm.get('grandTotal')?.setValue(null);
      } else if (selectedOption === 'option2') {
        this.editForm.get('itemQty')?.setValue(null);
        this.editForm.get('itemSku')?.setValue(null);
        this.editForm.get('grandTotal')?.setValue(null);
      }
    });
  }
}
