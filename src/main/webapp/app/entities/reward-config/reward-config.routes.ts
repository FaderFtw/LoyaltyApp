import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { RewardConfigComponent } from './list/reward-config.component';
import { RewardConfigDetailComponent } from './detail/reward-config-detail.component';
import { RewardConfigUpdateComponent } from './update/reward-config-update.component';
import RewardConfigResolve from './route/reward-config-routing-resolve.service';

const rewardConfigRoute: Routes = [
  {
    path: '',
    component: RewardConfigComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: RewardConfigDetailComponent,
    resolve: {
      rewardConfig: RewardConfigResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: RewardConfigUpdateComponent,
    resolve: {
      rewardConfig: RewardConfigResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: RewardConfigUpdateComponent,
    resolve: {
      rewardConfig: RewardConfigResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default rewardConfigRoute;
