import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ILoyaltyLevel } from '../loyalty-level.model';
import { LoyaltyLevelService } from '../service/loyalty-level.service';

const loyaltyLevelResolve = (route: ActivatedRouteSnapshot): Observable<null | ILoyaltyLevel> => {
  const id = route.params['id'];
  if (id) {
    return inject(LoyaltyLevelService)
      .find(id)
      .pipe(
        mergeMap((loyaltyLevel: HttpResponse<ILoyaltyLevel>) => {
          if (loyaltyLevel.body) {
            return of(loyaltyLevel.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default loyaltyLevelResolve;
