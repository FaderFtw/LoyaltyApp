import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { IRewardConfig } from '../reward-config.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../reward-config.test-samples';

import { RewardConfigService } from './reward-config.service';

const requireRestSample: IRewardConfig = {
  ...sampleWithRequiredData,
};

describe('RewardConfig Service', () => {
  let service: RewardConfigService;
  let httpMock: HttpTestingController;
  let expectedResult: IRewardConfig | IRewardConfig[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    expectedResult = null;
    service = TestBed.inject(RewardConfigService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should create a RewardConfig', () => {
      const rewardConfig = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(rewardConfig).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a RewardConfig', () => {
      const rewardConfig = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(rewardConfig).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a RewardConfig', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of RewardConfig', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a RewardConfig', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addRewardConfigToCollectionIfMissing', () => {
      it('should add a RewardConfig to an empty array', () => {
        const rewardConfig: IRewardConfig = sampleWithRequiredData;
        expectedResult = service.addRewardConfigToCollectionIfMissing([], rewardConfig);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(rewardConfig);
      });

      it('should not add a RewardConfig to an array that contains it', () => {
        const rewardConfig: IRewardConfig = sampleWithRequiredData;
        const rewardConfigCollection: IRewardConfig[] = [
          {
            ...rewardConfig,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addRewardConfigToCollectionIfMissing(rewardConfigCollection, rewardConfig);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a RewardConfig to an array that doesn't contain it", () => {
        const rewardConfig: IRewardConfig = sampleWithRequiredData;
        const rewardConfigCollection: IRewardConfig[] = [sampleWithPartialData];
        expectedResult = service.addRewardConfigToCollectionIfMissing(rewardConfigCollection, rewardConfig);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(rewardConfig);
      });

      it('should add only unique RewardConfig to an array', () => {
        const rewardConfigArray: IRewardConfig[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const rewardConfigCollection: IRewardConfig[] = [sampleWithRequiredData];
        expectedResult = service.addRewardConfigToCollectionIfMissing(rewardConfigCollection, ...rewardConfigArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const rewardConfig: IRewardConfig = sampleWithRequiredData;
        const rewardConfig2: IRewardConfig = sampleWithPartialData;
        expectedResult = service.addRewardConfigToCollectionIfMissing([], rewardConfig, rewardConfig2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(rewardConfig);
        expect(expectedResult).toContain(rewardConfig2);
      });

      it('should accept null and undefined values', () => {
        const rewardConfig: IRewardConfig = sampleWithRequiredData;
        expectedResult = service.addRewardConfigToCollectionIfMissing([], null, rewardConfig, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(rewardConfig);
      });

      it('should return initial array if no RewardConfig is added', () => {
        const rewardConfigCollection: IRewardConfig[] = [sampleWithRequiredData];
        expectedResult = service.addRewardConfigToCollectionIfMissing(rewardConfigCollection, undefined, null);
        expect(expectedResult).toEqual(rewardConfigCollection);
      });
    });

    describe('compareRewardConfig', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareRewardConfig(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareRewardConfig(entity1, entity2);
        const compareResult2 = service.compareRewardConfig(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareRewardConfig(entity1, entity2);
        const compareResult2 = service.compareRewardConfig(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareRewardConfig(entity1, entity2);
        const compareResult2 = service.compareRewardConfig(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
