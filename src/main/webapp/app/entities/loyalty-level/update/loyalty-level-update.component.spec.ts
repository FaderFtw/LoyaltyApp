import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { IOffer } from 'app/entities/offer/offer.model';
import { OfferService } from 'app/entities/offer/service/offer.service';
import { IRewardConfig } from 'app/entities/reward-config/reward-config.model';
import { RewardConfigService } from 'app/entities/reward-config/service/reward-config.service';
import { ILoyaltyLevel } from '../loyalty-level.model';
import { LoyaltyLevelService } from '../service/loyalty-level.service';
import { LoyaltyLevelFormService } from './loyalty-level-form.service';

import { LoyaltyLevelUpdateComponent } from './loyalty-level-update.component';

describe('LoyaltyLevel Management Update Component', () => {
  let comp: LoyaltyLevelUpdateComponent;
  let fixture: ComponentFixture<LoyaltyLevelUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let loyaltyLevelFormService: LoyaltyLevelFormService;
  let loyaltyLevelService: LoyaltyLevelService;
  let offerService: OfferService;
  let rewardConfigService: RewardConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoyaltyLevelUpdateComponent],
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
      .overrideTemplate(LoyaltyLevelUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(LoyaltyLevelUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    loyaltyLevelFormService = TestBed.inject(LoyaltyLevelFormService);
    loyaltyLevelService = TestBed.inject(LoyaltyLevelService);
    offerService = TestBed.inject(OfferService);
    rewardConfigService = TestBed.inject(RewardConfigService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Offer query and add missing value', () => {
      const loyaltyLevel: ILoyaltyLevel = { id: 456 };
      const offers: IOffer[] = [{ id: 3883 }];
      loyaltyLevel.offers = offers;

      const offerCollection: IOffer[] = [{ id: 32465 }];
      jest.spyOn(offerService, 'query').mockReturnValue(of(new HttpResponse({ body: offerCollection })));
      const additionalOffers = [...offers];
      const expectedCollection: IOffer[] = [...additionalOffers, ...offerCollection];
      jest.spyOn(offerService, 'addOfferToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ loyaltyLevel });
      comp.ngOnInit();

      expect(offerService.query).toHaveBeenCalled();
      expect(offerService.addOfferToCollectionIfMissing).toHaveBeenCalledWith(
        offerCollection,
        ...additionalOffers.map(expect.objectContaining),
      );
      expect(comp.offersSharedCollection).toEqual(expectedCollection);
    });

    it('Should call RewardConfig query and add missing value', () => {
      const loyaltyLevel: ILoyaltyLevel = { id: 456 };
      const rewards: IRewardConfig[] = [{ id: 31572 }];
      loyaltyLevel.rewards = rewards;

      const rewardConfigCollection: IRewardConfig[] = [{ id: 10447 }];
      jest.spyOn(rewardConfigService, 'query').mockReturnValue(of(new HttpResponse({ body: rewardConfigCollection })));
      const additionalRewardConfigs = [...rewards];
      const expectedCollection: IRewardConfig[] = [...additionalRewardConfigs, ...rewardConfigCollection];
      jest.spyOn(rewardConfigService, 'addRewardConfigToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ loyaltyLevel });
      comp.ngOnInit();

      expect(rewardConfigService.query).toHaveBeenCalled();
      expect(rewardConfigService.addRewardConfigToCollectionIfMissing).toHaveBeenCalledWith(
        rewardConfigCollection,
        ...additionalRewardConfigs.map(expect.objectContaining),
      );
      expect(comp.rewardConfigsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const loyaltyLevel: ILoyaltyLevel = { id: 456 };
      const offers: IOffer = { id: 14205 };
      loyaltyLevel.offers = [offers];
      const rewards: IRewardConfig = { id: 15900 };
      loyaltyLevel.rewards = [rewards];

      activatedRoute.data = of({ loyaltyLevel });
      comp.ngOnInit();

      expect(comp.offersSharedCollection).toContain(offers);
      expect(comp.rewardConfigsSharedCollection).toContain(rewards);
      expect(comp.loyaltyLevel).toEqual(loyaltyLevel);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ILoyaltyLevel>>();
      const loyaltyLevel = { id: 123 };
      jest.spyOn(loyaltyLevelFormService, 'getLoyaltyLevel').mockReturnValue(loyaltyLevel);
      jest.spyOn(loyaltyLevelService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ loyaltyLevel });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: loyaltyLevel }));
      saveSubject.complete();

      // THEN
      expect(loyaltyLevelFormService.getLoyaltyLevel).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(loyaltyLevelService.update).toHaveBeenCalledWith(expect.objectContaining(loyaltyLevel));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ILoyaltyLevel>>();
      const loyaltyLevel = { id: 123 };
      jest.spyOn(loyaltyLevelFormService, 'getLoyaltyLevel').mockReturnValue({ id: null });
      jest.spyOn(loyaltyLevelService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ loyaltyLevel: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: loyaltyLevel }));
      saveSubject.complete();

      // THEN
      expect(loyaltyLevelFormService.getLoyaltyLevel).toHaveBeenCalled();
      expect(loyaltyLevelService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<ILoyaltyLevel>>();
      const loyaltyLevel = { id: 123 };
      jest.spyOn(loyaltyLevelService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ loyaltyLevel });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(loyaltyLevelService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareOffer', () => {
      it('Should forward to offerService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(offerService, 'compareOffer');
        comp.compareOffer(entity, entity2);
        expect(offerService.compareOffer).toHaveBeenCalledWith(entity, entity2);
      });
    });

    describe('compareRewardConfig', () => {
      it('Should forward to rewardConfigService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(rewardConfigService, 'compareRewardConfig');
        comp.compareRewardConfig(entity, entity2);
        expect(rewardConfigService.compareRewardConfig).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
