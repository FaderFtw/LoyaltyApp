import { Routes } from '@angular/router';

import ErrorComponent from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    title: 'Error page!',
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      errorMessage: 'You are not authorized to access this page.',
    },
    title: 'Error page!',
  },
  {
    path: '404',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
