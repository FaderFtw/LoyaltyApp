import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { ILoyaltyLevel } from 'app/entities/loyalty-level/loyalty-level.model';
import { LoyaltyLevelService } from 'app/entities/loyalty-level/service/loyalty-level.service';
import { RewardConfigService } from '../service/reward-config.service';
import { IRewardConfig } from '../reward-config.model';
import { RewardConfigFormService } from './reward-config-form.service';

import { RewardConfigUpdateComponent } from './reward-config-update.component';

describe('RewardConfig Management Update Component', () => {
  let comp: RewardConfigUpdateComponent;
  let fixture: ComponentFixture<RewardConfigUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let rewardConfigFormService: RewardConfigFormService;
  let rewardConfigService: RewardConfigService;
  let loyaltyLevelService: LoyaltyLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RewardConfigUpdateComponent],
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
      .overrideTemplate(RewardConfigUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(RewardConfigUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    rewardConfigFormService = TestBed.inject(RewardConfigFormService);
    rewardConfigService = TestBed.inject(RewardConfigService);
    loyaltyLevelService = TestBed.inject(LoyaltyLevelService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call LoyaltyLevel query and add missing value', () => {
      const rewardConfig: IRewardConfig = { id: 456 };
      const loyaltyLevels: ILoyaltyLevel[] = [{ id: 4235 }];
      rewardConfig.loyaltyLevels = loyaltyLevels;

      const loyaltyLevelCollection: ILoyaltyLevel[] = [{ id: 31548 }];
      jest.spyOn(loyaltyLevelService, 'query').mockReturnValue(of(new HttpResponse({ body: loyaltyLevelCollection })));
      const additionalLoyaltyLevels = [...loyaltyLevels];
      const expectedCollection: ILoyaltyLevel[] = [...additionalLoyaltyLevels, ...loyaltyLevelCollection];
      jest.spyOn(loyaltyLevelService, 'addLoyaltyLevelToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ rewardConfig });
      comp.ngOnInit();

      expect(loyaltyLevelService.query).toHaveBeenCalled();
      expect(loyaltyLevelService.addLoyaltyLevelToCollectionIfMissing).toHaveBeenCalledWith(
        loyaltyLevelCollection,
        ...additionalLoyaltyLevels.map(expect.objectContaining),
      );
      expect(comp.loyaltyLevelsSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const rewardConfig: IRewardConfig = { id: 456 };
      const loyaltyLevels: ILoyaltyLevel = { id: 21509 };
      rewardConfig.loyaltyLevels = [loyaltyLevels];

      activatedRoute.data = of({ rewardConfig });
      comp.ngOnInit();

      expect(comp.loyaltyLevelsSharedCollection).toContain(loyaltyLevels);
      expect(comp.rewardConfig).toEqual(rewardConfig);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IRewardConfig>>();
      const rewardConfig = { id: 123 };
      jest.spyOn(rewardConfigFormService, 'getRewardConfig').mockReturnValue(rewardConfig);
      jest.spyOn(rewardConfigService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ rewardConfig });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: rewardConfig }));
      saveSubject.complete();

      // THEN
      expect(rewardConfigFormService.getRewardConfig).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(rewardConfigService.update).toHaveBeenCalledWith(expect.objectContaining(rewardConfig));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IRewardConfig>>();
      const rewardConfig = { id: 123 };
      jest.spyOn(rewardConfigFormService, 'getRewardConfig').mockReturnValue({ id: null });
      jest.spyOn(rewardConfigService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ rewardConfig: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: rewardConfig }));
      saveSubject.complete();

      // THEN
      expect(rewardConfigFormService.getRewardConfig).toHaveBeenCalled();
      expect(rewardConfigService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IRewardConfig>>();
      const rewardConfig = { id: 123 };
      jest.spyOn(rewardConfigService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ rewardConfig });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(rewardConfigService.update).toHaveBeenCalled();
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
