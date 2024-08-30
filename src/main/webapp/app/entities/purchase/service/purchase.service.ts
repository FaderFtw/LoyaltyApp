import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IPurchase, NewPurchase } from '../purchase.model';

export type PartialUpdatePurchase = Partial<IPurchase> & Pick<IPurchase, 'id'>;

type RestOf<T extends IPurchase | NewPurchase> = Omit<T, 'date'> & {
  date?: string | null;
};

export type RestPurchase = RestOf<IPurchase>;

export type NewRestPurchase = RestOf<NewPurchase>;

export type PartialUpdateRestPurchase = RestOf<PartialUpdatePurchase>;

export type EntityResponseType = HttpResponse<IPurchase>;
export type EntityArrayResponseType = HttpResponse<IPurchase[]>;

@Injectable({ providedIn: 'root' })
export class PurchaseService {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('http://localhost:3003/api/purchases');

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestPurchase>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestPurchase[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  getPurchaseIdentifier(offer: Pick<IPurchase, 'id'>): number {
    return offer.id;
  }

  comparePurchase(o1: Pick<IPurchase, 'id'> | null, o2: Pick<IPurchase, 'id'> | null): boolean {
    return o1 && o2 ? this.getPurchaseIdentifier(o1) === this.getPurchaseIdentifier(o2) : o1 === o2;
  }

  protected convertDateFromServer(restPurchase: RestPurchase): IPurchase {
    return {
      ...restPurchase,
      date: restPurchase.date ? dayjs(restPurchase.date) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestPurchase>): HttpResponse<IPurchase> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestPurchase[]>): HttpResponse<IPurchase[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
