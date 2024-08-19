import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../reward-config.test-samples';

import { RewardConfigFormService } from './reward-config-form.service';

describe('RewardConfig Form Service', () => {
  let service: RewardConfigFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardConfigFormService);
  });

  describe('Service methods', () => {
    describe('createRewardConfigFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createRewardConfigFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            title: expect.any(Object),
            description: expect.any(Object),
            balanceValue: expect.any(Object),
            convertedValue: expect.any(Object),
            daysToExpire: expect.any(Object),
            loyaltyLevels: expect.any(Object),
          }),
        );
      });

      it('passing IRewardConfig should create a new form with FormGroup', () => {
        const formGroup = service.createRewardConfigFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            title: expect.any(Object),
            description: expect.any(Object),
            balanceValue: expect.any(Object),
            convertedValue: expect.any(Object),
            daysToExpire: expect.any(Object),
            loyaltyLevels: expect.any(Object),
          }),
        );
      });
    });

    describe('getRewardConfig', () => {
      it('should return NewRewardConfig for default RewardConfig initial value', () => {
        const formGroup = service.createRewardConfigFormGroup(sampleWithNewData);

        const rewardConfig = service.getRewardConfig(formGroup) as any;

        expect(rewardConfig).toMatchObject(sampleWithNewData);
      });

      it('should return NewRewardConfig for empty RewardConfig initial value', () => {
        const formGroup = service.createRewardConfigFormGroup();

        const rewardConfig = service.getRewardConfig(formGroup) as any;

        expect(rewardConfig).toMatchObject({});
      });

      it('should return IRewardConfig', () => {
        const formGroup = service.createRewardConfigFormGroup(sampleWithRequiredData);

        const rewardConfig = service.getRewardConfig(formGroup) as any;

        expect(rewardConfig).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing IRewardConfig should not enable id FormControl', () => {
        const formGroup = service.createRewardConfigFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewRewardConfig should disable id FormControl', () => {
        const formGroup = service.createRewardConfigFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
