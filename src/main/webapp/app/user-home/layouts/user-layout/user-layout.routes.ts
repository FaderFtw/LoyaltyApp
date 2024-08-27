import { Routes } from '@angular/router';

import { UserRewardsComponent } from '../../pages/user-rewards/user-rewards.component';
import { UserOffersComponent } from '../../pages/user-offers/user-offers.component';
import { UserPurchasesComponent } from '../../pages/user-purchases/user-purchases.component';
import { UserHistoryComponent } from '../../pages/user-history/user-history.component';
import { UserHomeComponent } from '../../user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'rewards', component: UserRewardsComponent },
  { path: 'offers', component: UserOffersComponent },
  { path: 'purchases', component: UserPurchasesComponent },
  { path: 'history', component: UserHistoryComponent },
];

export default routes;
