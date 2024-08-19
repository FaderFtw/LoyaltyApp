import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IRewardConfig, NewRewardConfig } from '../reward-config.model';

export type PartialUpdateRewardConfig = Partial<IRewardConfig> & Pick<IRewardConfig, 'id'>;

export type EntityResponseType = HttpResponse<IRewardConfig>;
export type EntityArrayResponseType = HttpResponse<IRewardConfig[]>;

@Injectable({ providedIn: 'root' })
export class RewardConfigService {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/reward-configs');

  create(rewardConfig: NewRewardConfig): Observable<EntityResponseType> {
    return this.http.post<IRewardConfig>(this.resourceUrl, rewardConfig, { observe: 'response' });
  }

  update(rewardConfig: IRewardConfig): Observable<EntityResponseType> {
    return this.http.put<IRewardConfig>(`${this.resourceUrl}/${this.getRewardConfigIdentifier(rewardConfig)}`, rewardConfig, {
      observe: 'response',
    });
  }

  partialUpdate(rewardConfig: PartialUpdateRewardConfig): Observable<EntityResponseType> {
    return this.http.patch<IRewardConfig>(`${this.resourceUrl}/${this.getRewardConfigIdentifier(rewardConfig)}`, rewardConfig, {
      observe: 'response',
    });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IRewardConfig>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IRewardConfig[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getRewardConfigIdentifier(rewardConfig: Pick<IRewardConfig, 'id'>): number {
    return rewardConfig.id;
  }

  compareRewardConfig(o1: Pick<IRewardConfig, 'id'> | null, o2: Pick<IRewardConfig, 'id'> | null): boolean {
    return o1 && o2 ? this.getRewardConfigIdentifier(o1) === this.getRewardConfigIdentifier(o2) : o1 === o2;
  }

  addRewardConfigToCollectionIfMissing<Type extends Pick<IRewardConfig, 'id'>>(
    rewardConfigCollection: Type[],
    ...rewardConfigsToCheck: (Type | null | undefined)[]
  ): Type[] {
    const rewardConfigs: Type[] = rewardConfigsToCheck.filter(isPresent);
    if (rewardConfigs.length > 0) {
      const rewardConfigCollectionIdentifiers = rewardConfigCollection.map(rewardConfigItem =>
        this.getRewardConfigIdentifier(rewardConfigItem),
      );
      const rewardConfigsToAdd = rewardConfigs.filter(rewardConfigItem => {
        const rewardConfigIdentifier = this.getRewardConfigIdentifier(rewardConfigItem);
        if (rewardConfigCollectionIdentifiers.includes(rewardConfigIdentifier)) {
          return false;
        }
        rewardConfigCollectionIdentifiers.push(rewardConfigIdentifier);
        return true;
      });
      return [...rewardConfigsToAdd, ...rewardConfigCollection];
    }
    return rewardConfigCollection;
  }
}
