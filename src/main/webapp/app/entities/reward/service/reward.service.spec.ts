import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { IReward } from '../reward.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../reward.test-samples';

import { RewardService, RestReward } from './reward.service';

const requireRestSample: RestReward = {
  ...sampleWithRequiredData,
  createdAt: sampleWithRequiredData.createdAt?.toJSON(),
  fromDate: sampleWithRequiredData.fromDate?.toJSON(),
  toDate: sampleWithRequiredData.toDate?.toJSON(),
};

describe('Reward Service', () => {
  let service: RewardService;
  let httpMock: HttpTestingController;
  let expectedResult: IReward | IReward[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    expectedResult = null;
    service = TestBed.inject(RewardService);
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

    it('should create a Reward', () => {
      const reward = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(reward).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a Reward', () => {
      const reward = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(reward).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a Reward', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of Reward', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a Reward', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addRewardToCollectionIfMissing', () => {
      it('should add a Reward to an empty array', () => {
        const reward: IReward = sampleWithRequiredData;
        expectedResult = service.addRewardToCollectionIfMissing([], reward);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(reward);
      });

      it('should not add a Reward to an array that contains it', () => {
        const reward: IReward = sampleWithRequiredData;
        const rewardCollection: IReward[] = [
          {
            ...reward,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addRewardToCollectionIfMissing(rewardCollection, reward);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a Reward to an array that doesn't contain it", () => {
        const reward: IReward = sampleWithRequiredData;
        const rewardCollection: IReward[] = [sampleWithPartialData];
        expectedResult = service.addRewardToCollectionIfMissing(rewardCollection, reward);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(reward);
      });

      it('should add only unique Reward to an array', () => {
        const rewardArray: IReward[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const rewardCollection: IReward[] = [sampleWithRequiredData];
        expectedResult = service.addRewardToCollectionIfMissing(rewardCollection, ...rewardArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const reward: IReward = sampleWithRequiredData;
        const reward2: IReward = sampleWithPartialData;
        expectedResult = service.addRewardToCollectionIfMissing([], reward, reward2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(reward);
        expect(expectedResult).toContain(reward2);
      });

      it('should accept null and undefined values', () => {
        const reward: IReward = sampleWithRequiredData;
        expectedResult = service.addRewardToCollectionIfMissing([], null, reward, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(reward);
      });

      it('should return initial array if no Reward is added', () => {
        const rewardCollection: IReward[] = [sampleWithRequiredData];
        expectedResult = service.addRewardToCollectionIfMissing(rewardCollection, undefined, null);
        expect(expectedResult).toEqual(rewardCollection);
      });
    });

    describe('compareReward', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareReward(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareReward(entity1, entity2);
        const compareResult2 = service.compareReward(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareReward(entity1, entity2);
        const compareResult2 = service.compareReward(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareReward(entity1, entity2);
        const compareResult2 = service.compareReward(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
