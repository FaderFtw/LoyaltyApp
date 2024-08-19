import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'Authorities' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'user-extra',
    data: { pageTitle: 'UserExtras' },
    loadChildren: () => import('./user-extra/user-extra.routes'),
  },
  {
    path: 'loyalty-level',
    data: { pageTitle: 'LoyaltyLevels' },
    loadChildren: () => import('./loyalty-level/loyalty-level.routes'),
  },
  {
    path: 'reward',
    data: { pageTitle: 'Rewards' },
    loadChildren: () => import('./reward/reward.routes'),
  },
  {
    path: 'reward-config',
    data: { pageTitle: 'RewardConfigs' },
    loadChildren: () => import('./reward-config/reward-config.routes'),
  },
  {
    path: 'offer',
    data: { pageTitle: 'Offers' },
    loadChildren: () => import('./offer/offer.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
