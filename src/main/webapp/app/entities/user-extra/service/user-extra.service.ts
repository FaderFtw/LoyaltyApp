import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IUserExtra, NewUserExtra } from '../user-extra.model';

export type PartialUpdateUserExtra = Partial<IUserExtra> & Pick<IUserExtra, 'id'>;

export type EntityResponseType = HttpResponse<IUserExtra>;
export type EntityArrayResponseType = HttpResponse<IUserExtra[]>;

@Injectable({ providedIn: 'root' })
export class UserExtraService {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/user-extras');

  create(userExtra: NewUserExtra): Observable<EntityResponseType> {
    return this.http.post<IUserExtra>(this.resourceUrl, userExtra, { observe: 'response' });
  }

  update(userExtra: IUserExtra): Observable<EntityResponseType> {
    return this.http.put<IUserExtra>(`${this.resourceUrl}/${this.getUserExtraIdentifier(userExtra)}`, userExtra, { observe: 'response' });
  }

  partialUpdate(userExtra: PartialUpdateUserExtra): Observable<EntityResponseType> {
    return this.http.patch<IUserExtra>(`${this.resourceUrl}/${this.getUserExtraIdentifier(userExtra)}`, userExtra, { observe: 'response' });
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http.get<IUserExtra>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(params: any): Observable<EntityArrayResponseType> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', params.page);
    if (params.sort) {
      queryParams = queryParams.append('sort', params.sort);
    }

    return this.http.get<IUserExtra[]>(this.resourceUrl, { params: queryParams, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getUserExtraIdentifier(userExtra: Pick<IUserExtra, 'id'>): string {
    return userExtra.id;
  }

  compareUserExtra(o1: Pick<IUserExtra, 'id'> | null, o2: Pick<IUserExtra, 'id'> | null): boolean {
    return o1 && o2 ? this.getUserExtraIdentifier(o1) === this.getUserExtraIdentifier(o2) : o1 === o2;
  }

  addUserExtraToCollectionIfMissing<Type extends Pick<IUserExtra, 'id'>>(
    userExtraCollection: Type[],
    ...userExtrasToCheck: (Type | null | undefined)[]
  ): Type[] {
    const userExtras: Type[] = userExtrasToCheck.filter(isPresent);
    if (userExtras.length > 0) {
      const userExtraCollectionIdentifiers = userExtraCollection.map(userExtraItem => this.getUserExtraIdentifier(userExtraItem));
      const userExtrasToAdd = userExtras.filter(userExtraItem => {
        const userExtraIdentifier = this.getUserExtraIdentifier(userExtraItem);
        if (userExtraCollectionIdentifiers.includes(userExtraIdentifier)) {
          return false;
        }
        userExtraCollectionIdentifiers.push(userExtraIdentifier);
        return true;
      });
      return [...userExtrasToAdd, ...userExtraCollection];
    }
    return userExtraCollection;
  }
}
