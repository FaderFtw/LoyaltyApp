import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { ILoyaltyLevel } from 'app/entities/loyalty-level/loyalty-level.model';
import { LoyaltyLevelService } from 'app/entities/loyalty-level/service/loyalty-level.service';
import { OfferService } from '../service/offer.service';
import { IOffer } from '../offer.model';
import { OfferFormService } from './offer-form.service';

import { OfferUpdateComponent } from './offer-update.component';

describe('Offer Management Update Component', () => {
  let comp: OfferUpdateComponent;
  let fixture: ComponentFixture<OfferUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let offerFormService: OfferFormService;
  let offerService: OfferService;
  let loyaltyLevelService: LoyaltyLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OfferUpdateComponent],
      providers: [
        provideHttpClient(),
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(OfferUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(OfferUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    offerFormService = TestBed.inject(OfferFormService);
    offerService = TestBed.inject(OfferService);
    loyaltyLevelService = TestBed.inject(LoyaltyLevelService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call LoyaltyLevel query and add missing value', () => {
      const offer: IOffer = { id: 456 };
      const loyaltyLevels: ILoyaltyLevel[] = [{ id: 26528 }];
      offer.loyaltyLevels = loyaltyLevels;

      const loyaltyLevelCollection: ILoyaltyLevel[] = [{ id: 12214 }];
      jest.spyOn(loyaltyLevelService, 'query').mockReturnValue(of(new HttpResponse({ body: loyaltyLevelCollection })));
      const additionalLoyaltyLevels = [...loyaltyLevels];
      const expectedCollection: ILoyaltyLevel[] = [...additionalLoyaltyLevels, ...loyaltyLevelCollection];
      jest.spyOn(loyaltyLevelService, 'addLoyaltyLevelToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ offer });
      comp.ngOnInit();

      expect(loyaltyLevelService.query).toHaveBeenCalled();
      expect(loyaltyLevelService.addLoyaltyLevelToCollectionIfMissing).toHaveBeenCalledWith(
        loyaltyLevelCollection,
        ...additionalLoyaltyLevels.map(expect.objectContaining),
      );
      expect(comp.loyaltyLevelsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const offer: IOffer = { id: 456 };
      const loyaltyLevels: ILoyaltyLevel = { id: 23951 };
      offer.loyaltyLevels = [loyaltyLevels];

      activatedRoute.data = of({ offer });
      comp.ngOnInit();

      expect(comp.loyaltyLevelsSharedCollection).toContain(loyaltyLevels);
      expect(comp.offer).toEqual(offer);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOffer>>();
      const offer = { id: 123 };
      jest.spyOn(offerFormService, 'getOffer').mockReturnValue(offer);
      jest.spyOn(offerService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ offer });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: offer }));
      saveSubject.complete();

      // THEN
      expect(offerFormService.getOffer).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(offerService.update).toHaveBeenCalledWith(expect.objectContaining(offer));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOffer>>();
      const offer = { id: 123 };
      jest.spyOn(offerFormService, 'getOffer').mockReturnValue({ id: null });
      jest.spyOn(offerService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ offer: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: offer }));
      saveSubject.complete();

      // THEN
      expect(offerFormService.getOffer).toHaveBeenCalled();
      expect(offerService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IOffer>>();
      const offer = { id: 123 };
      jest.spyOn(offerService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ offer });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(offerService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareLoyaltyLevel', () => {
      it('Should forward to loyaltyLevelService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(loyaltyLevelService, 'compareLoyaltyLevel');
        comp.compareLoyaltyLevel(entity, entity2);
        expect(loyaltyLevelService.compareLoyaltyLevel).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
