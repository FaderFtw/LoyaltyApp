import { Routes } from '@angular/router';

import { Authority } from 'app/config/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { errorRoute } from './layouts/error/error.route';

import HomeComponent from './home/home.component';
import { UserLayoutComponent } from './user-home/layouts/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
    title: 'LoyaltyApp',
  },
  {
    path: 'home',
    component: UserLayoutComponent,
    canActivate: [UserRouteAccessService],
    loadChildren: () => import('./user-home/layouts/user-layout/user-layout.routes'),
    title: 'LoyaltyApp',
  },
  {
    path: 'admin',
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
    loadChildren: () => import('./admin/admin.routes'),
  },
  {
    path: '',
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
    loadChildren: () => import(`./entities/entity.routes`),
  },
  ...errorRoute,
];

export default routes;
