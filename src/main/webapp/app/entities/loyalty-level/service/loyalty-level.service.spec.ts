import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { ILoyaltyLevel } from '../loyalty-level.model';
import { sampleWithRequiredData, sampleWithNewData, sampleWithPartialData, sampleWithFullData } from '../loyalty-level.test-samples';

import { LoyaltyLevelService } from './loyalty-level.service';

const requireRestSample: ILoyaltyLevel = {
  ...sampleWithRequiredData,
};

describe('LoyaltyLevel Service', () => {
  let service: LoyaltyLevelService;
  let httpMock: HttpTestingController;
  let expectedResult: ILoyaltyLevel | ILoyaltyLevel[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    expectedResult = null;
    service = TestBed.inject(LoyaltyLevelService);
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

    it('should create a LoyaltyLevel', () => {
      const loyaltyLevel = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(loyaltyLevel).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a LoyaltyLevel', () => {
      const loyaltyLevel = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(loyaltyLevel).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a LoyaltyLevel', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of LoyaltyLevel', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a LoyaltyLevel', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addLoyaltyLevelToCollectionIfMissing', () => {
      it('should add a LoyaltyLevel to an empty array', () => {
        const loyaltyLevel: ILoyaltyLevel = sampleWithRequiredData;
        expectedResult = service.addLoyaltyLevelToCollectionIfMissing([], loyaltyLevel);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(loyaltyLevel);
      });

      it('should not add a LoyaltyLevel to an array that contains it', () => {
        const loyaltyLevel: ILoyaltyLevel = sampleWithRequiredData;
        const loyaltyLevelCollection: ILoyaltyLevel[] = [
          {
            ...loyaltyLevel,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addLoyaltyLevelToCollectionIfMissing(loyaltyLevelCollection, loyaltyLevel);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a LoyaltyLevel to an array that doesn't contain it", () => {
        const loyaltyLevel: ILoyaltyLevel = sampleWithRequiredData;
        const loyaltyLevelCollection: ILoyaltyLevel[] = [sampleWithPartialData];
        expectedResult = service.addLoyaltyLevelToCollectionIfMissing(loyaltyLevelCollection, loyaltyLevel);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(loyaltyLevel);
      });

      it('should add only unique LoyaltyLevel to an array', () => {
        const loyaltyLevelArray: ILoyaltyLevel[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const loyaltyLevelCollection: ILoyaltyLevel[] = [sampleWithRequiredData];
        expectedResult = service.addLoyaltyLevelToCollectionIfMissing(loyaltyLevelCollection, ...loyaltyLevelArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const loyaltyLevel: ILoyaltyLevel = sampleWithRequiredData;
        const loyaltyLevel2: ILoyaltyLevel = sampleWithPartialData;
        expectedResult = service.addLoyaltyLevelToCollectionIfMissing([], loyaltyLevel, loyaltyLevel2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(loyaltyLevel);
        expect(expectedResult).toContain(loyaltyLevel2);
      });

      it('should accept null and undefined values', () => {
        const loyaltyLevel: ILoyaltyLevel = sampleWithRequiredData;
        expectedResult = service.addLoyaltyLevelToCollectionIfMissing([], null, loyaltyLevel, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(loyaltyLevel);
      });

      it('should return initial array if no LoyaltyLevel is added', () => {
        const loyaltyLevelCollection: ILoyaltyLevel[] = [sampleWithRequiredData];
        expectedResult = service.addLoyaltyLevelToCollectionIfMissing(loyaltyLevelCollection, undefined, null);
        expect(expectedResult).toEqual(loyaltyLevelCollection);
      });
    });

    describe('compareLoyaltyLevel', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareLoyaltyLevel(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareLoyaltyLevel(entity1, entity2);
        const compareResult2 = service.compareLoyaltyLevel(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareLoyaltyLevel(entity1, entity2);
        const compareResult2 = service.compareLoyaltyLevel(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareLoyaltyLevel(entity1, entity2);
        const compareResult2 = service.compareLoyaltyLevel(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
