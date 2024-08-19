import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, from } from 'rxjs';

import { IRewardConfig } from 'app/entities/reward-config/reward-config.model';
import { RewardConfigService } from 'app/entities/reward-config/service/reward-config.service';
import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/service/user.service';
import { IReward } from '../reward.model';
import { RewardService } from '../service/reward.service';
import { RewardFormService } from './reward-form.service';

import { RewardUpdateComponent } from './reward-update.component';

describe('Reward Management Update Component', () => {
  let comp: RewardUpdateComponent;
  let fixture: ComponentFixture<RewardUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let rewardFormService: RewardFormService;
  let rewardService: RewardService;
  let rewardConfigService: RewardConfigService;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RewardUpdateComponent],
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
      .overrideTemplate(RewardUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(RewardUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    rewardFormService = TestBed.inject(RewardFormService);
    rewardService = TestBed.inject(RewardService);
    rewardConfigService = TestBed.inject(RewardConfigService);
    userService = TestBed.inject(UserService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call RewardConfig query and add missing value', () => {
      const reward: IReward = { id: 456 };
      const rewardConfig: IRewardConfig = { id: 2108 };
      reward.rewardConfig = rewardConfig;

      const rewardConfigCollection: IRewardConfig[] = [{ id: 7541 }];
      jest.spyOn(rewardConfigService, 'query').mockReturnValue(of(new HttpResponse({ body: rewardConfigCollection })));
      const additionalRewardConfigs = [rewardConfig];
      const expectedCollection: IRewardConfig[] = [...additionalRewardConfigs, ...rewardConfigCollection];
      jest.spyOn(rewardConfigService, 'addRewardConfigToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ reward });
      comp.ngOnInit();

      expect(rewardConfigService.query).toHaveBeenCalled();
      expect(rewardConfigService.addRewardConfigToCollectionIfMissing).toHaveBeenCalledWith(
        rewardConfigCollection,
        ...additionalRewardConfigs.map(expect.objectContaining),
      );
      expect(comp.rewardConfigsSharedCollection).toEqual(expectedCollection);
    });

    it('Should call User query and add missing value', () => {
      const reward: IReward = { id: 456 };
      const user: IUser = { id: '227053ee-1617-4a38-a98f-7d202867713a' };
      reward.user = user;

      const userCollection: IUser[] = [{ id: 'cf468e5c-6ea1-4dd2-8225-b012cf5571b5' }];
      jest.spyOn(userService, 'query').mockReturnValue(of(new HttpResponse({ body: userCollection })));
      const additionalUsers = [user];
      const expectedCollection: IUser[] = [...additionalUsers, ...userCollection];
      jest.spyOn(userService, 'addUserToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ reward });
      comp.ngOnInit();

      expect(userService.query).toHaveBeenCalled();
      expect(userService.addUserToCollectionIfMissing).toHaveBeenCalledWith(
        userCollection,
        ...additionalUsers.map(expect.objectContaining),
      );
      expect(comp.usersSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const reward: IReward = { id: 456 };
      const rewardConfig: IRewardConfig = { id: 12472 };
      reward.rewardConfig = rewardConfig;
      const user: IUser = { id: 'af0f7271-1fc6-4bf4-82e0-136ecddf6f32' };
      reward.user = user;

      activatedRoute.data = of({ reward });
      comp.ngOnInit();

      expect(comp.rewardConfigsSharedCollection).toContain(rewardConfig);
      expect(comp.usersSharedCollection).toContain(user);
      expect(comp.reward).toEqual(reward);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IReward>>();
      const reward = { id: 123 };
      jest.spyOn(rewardFormService, 'getReward').mockReturnValue(reward);
      jest.spyOn(rewardService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ reward });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: reward }));
      saveSubject.complete();

      // THEN
      expect(rewardFormService.getReward).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(rewardService.update).toHaveBeenCalledWith(expect.objectContaining(reward));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IReward>>();
      const reward = { id: 123 };
      jest.spyOn(rewardFormService, 'getReward').mockReturnValue({ id: null });
      jest.spyOn(rewardService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ reward: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: reward }));
      saveSubject.complete();

      // THEN
      expect(rewardFormService.getReward).toHaveBeenCalled();
      expect(rewardService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IReward>>();
      const reward = { id: 123 };
      jest.spyOn(rewardService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ reward });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(rewardService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareRewardConfig', () => {
      it('Should forward to rewardConfigService', () => {
        const entity = { id: 123 };
        const entity2 = { id: 456 };
        jest.spyOn(rewardConfigService, 'compareRewardConfig');
        comp.compareRewardConfig(entity, entity2);
        expect(rewardConfigService.compareRewardConfig).toHaveBeenCalledWith(entity, entity2);
      });
    });

    describe('compareUser', () => {
      it('Should forward to userService', () => {
        const entity = { id: 'ABC' };
        const entity2 = { id: 'CBA' };
        jest.spyOn(userService, 'compareUser');
        comp.compareUser(entity, entity2);
        expect(userService.compareUser).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
