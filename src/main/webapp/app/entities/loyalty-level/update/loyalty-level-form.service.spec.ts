import { TestBed } from '@angular/core/testing';

import { sampleWithRequiredData, sampleWithNewData } from '../loyalty-level.test-samples';

import { LoyaltyLevelFormService } from './loyalty-level-form.service';

describe('LoyaltyLevel Form Service', () => {
  let service: LoyaltyLevelFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoyaltyLevelFormService);
  });

  describe('Service methods', () => {
    describe('createLoyaltyLevelFormGroup', () => {
      it('should create a new form with FormControl', () => {
        const formGroup = service.createLoyaltyLevelFormGroup();

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            title: expect.any(Object),
            description: expect.any(Object),
            minBalance: expect.any(Object),
            maxBalance: expect.any(Object),
            offers: expect.any(Object),
            rewards: expect.any(Object),
          }),
        );
      });

      it('passing ILoyaltyLevel should create a new form with FormGroup', () => {
        const formGroup = service.createLoyaltyLevelFormGroup(sampleWithRequiredData);

        expect(formGroup.controls).toEqual(
          expect.objectContaining({
            id: expect.any(Object),
            title: expect.any(Object),
            description: expect.any(Object),
            minBalance: expect.any(Object),
            maxBalance: expect.any(Object),
            offers: expect.any(Object),
            rewards: expect.any(Object),
          }),
        );
      });
    });

    describe('getLoyaltyLevel', () => {
      it('should return NewLoyaltyLevel for default LoyaltyLevel initial value', () => {
        const formGroup = service.createLoyaltyLevelFormGroup(sampleWithNewData);

        const loyaltyLevel = service.getLoyaltyLevel(formGroup) as any;

        expect(loyaltyLevel).toMatchObject(sampleWithNewData);
      });

      it('should return NewLoyaltyLevel for empty LoyaltyLevel initial value', () => {
        const formGroup = service.createLoyaltyLevelFormGroup();

        const loyaltyLevel = service.getLoyaltyLevel(formGroup) as any;

        expect(loyaltyLevel).toMatchObject({});
      });

      it('should return ILoyaltyLevel', () => {
        const formGroup = service.createLoyaltyLevelFormGroup(sampleWithRequiredData);

        const loyaltyLevel = service.getLoyaltyLevel(formGroup) as any;

        expect(loyaltyLevel).toMatchObject(sampleWithRequiredData);
      });
    });

    describe('resetForm', () => {
      it('passing ILoyaltyLevel should not enable id FormControl', () => {
        const formGroup = service.createLoyaltyLevelFormGroup();
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, sampleWithRequiredData);

        expect(formGroup.controls.id.disabled).toBe(true);
      });

      it('passing NewLoyaltyLevel should disable id FormControl', () => {
        const formGroup = service.createLoyaltyLevelFormGroup(sampleWithRequiredData);
        expect(formGroup.controls.id.disabled).toBe(true);

        service.resetForm(formGroup, { id: null });

        expect(formGroup.controls.id.disabled).toBe(true);
      });
    });
  });
});
