import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ILoyaltyLevel, NewLoyaltyLevel } from '../loyalty-level.model';

export type PartialUpdateLoyaltyLevel = Partial<ILoyaltyLevel> & Pick<ILoyaltyLevel, 'id'>;

export type EntityResponseType = HttpResponse<ILoyaltyLevel>;
export type EntityArrayResponseType = HttpResponse<ILoyaltyLevel[]>;

@Injectable({ providedIn: 'root' })
export class LoyaltyLevelService {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/loyalty-levels');

  create(loyaltyLevel: NewLoyaltyLevel): Observable<EntityResponseType> {
    return this.http.post<ILoyaltyLevel>(this.resourceUrl, loyaltyLevel, { observe: 'response' });
  }

  update(loyaltyLevel: ILoyaltyLevel): Observable<EntityResponseType> {
    return this.http.put<ILoyaltyLevel>(`${this.resourceUrl}/${this.getLoyaltyLevelIdentifier(loyaltyLevel)}`, loyaltyLevel, {
      observe: 'response',
    });
  }

  partialUpdate(loyaltyLevel: PartialUpdateLoyaltyLevel): Observable<EntityResponseType> {
    return this.http.patch<ILoyaltyLevel>(`${this.resourceUrl}/${this.getLoyaltyLevelIdentifier(loyaltyLevel)}`, loyaltyLevel, {
      observe: 'response',
    });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ILoyaltyLevel>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ILoyaltyLevel[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getLoyaltyLevelIdentifier(loyaltyLevel: Pick<ILoyaltyLevel, 'id'>): number {
    return loyaltyLevel.id;
  }

  compareLoyaltyLevel(o1: Pick<ILoyaltyLevel, 'id'> | null, o2: Pick<ILoyaltyLevel, 'id'> | null): boolean {
    return o1 && o2 ? this.getLoyaltyLevelIdentifier(o1) === this.getLoyaltyLevelIdentifier(o2) : o1 === o2;
  }

  addLoyaltyLevelToCollectionIfMissing<Type extends Pick<ILoyaltyLevel, 'id'>>(
    loyaltyLevelCollection: Type[],
    ...loyaltyLevelsToCheck: (Type | null | undefined)[]
  ): Type[] {
    const loyaltyLevels: Type[] = loyaltyLevelsToCheck.filter(isPresent);
    if (loyaltyLevels.length > 0) {
      const loyaltyLevelCollectionIdentifiers = loyaltyLevelCollection.map(loyaltyLevelItem =>
        this.getLoyaltyLevelIdentifier(loyaltyLevelItem),
      );
      const loyaltyLevelsToAdd = loyaltyLevels.filter(loyaltyLevelItem => {
        const loyaltyLevelIdentifier = this.getLoyaltyLevelIdentifier(loyaltyLevelItem);
        if (loyaltyLevelCollectionIdentifiers.includes(loyaltyLevelIdentifier)) {
          return false;
        }
        loyaltyLevelCollectionIdentifiers.push(loyaltyLevelIdentifier);
        return true;
      });
      return [...loyaltyLevelsToAdd, ...loyaltyLevelCollection];
    }
    return loyaltyLevelCollection;
  }

  getLoyaltyLevelImage(loyaltyLevel: ILoyaltyLevel): string {
    switch (loyaltyLevel.title) {
      case 'DIAMOND':
        return 'Diamond-small.png';
      case 'GOLD':
        return 'Gold-small.png';
      case 'SILVER':
        return 'Silver-small.png';
      case 'BASIC':
        return 'Basic-small.png';
      default:
        return 'default.png'; // Fallback image if needed
    }
  }
}
