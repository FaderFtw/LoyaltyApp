import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { LoyaltyLevelComponent } from './list/loyalty-level.component';
import { LoyaltyLevelDetailComponent } from './detail/loyalty-level-detail.component';
import { LoyaltyLevelUpdateComponent } from './update/loyalty-level-update.component';
import LoyaltyLevelResolve from './route/loyalty-level-routing-resolve.service';

const loyaltyLevelRoute: Routes = [
  {
    path: '',
    component: LoyaltyLevelComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: LoyaltyLevelDetailComponent,
    resolve: {
      loyaltyLevel: LoyaltyLevelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: LoyaltyLevelUpdateComponent,
    resolve: {
      loyaltyLevel: LoyaltyLevelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: LoyaltyLevelUpdateComponent,
    resolve: {
      loyaltyLevel: LoyaltyLevelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default loyaltyLevelRoute;
