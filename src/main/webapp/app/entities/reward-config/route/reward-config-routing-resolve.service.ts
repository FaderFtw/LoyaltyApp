import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IRewardConfig } from '../reward-config.model';
import { RewardConfigService } from '../service/reward-config.service';

const rewardConfigResolve = (route: ActivatedRouteSnapshot): Observable<null | IRewardConfig> => {
  const id = route.params['id'];
  if (id) {
    return inject(RewardConfigService)
      .find(id)
      .pipe(
        mergeMap((rewardConfig: HttpResponse<IRewardConfig>) => {
          if (rewardConfig.body) {
            return of(rewardConfig.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default rewardConfigResolve;
