import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./features/dashboard/dashboard.routes')
  //     .then(m => m.DASHBOARD_ROUTES),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'transactions',
  //   loadChildren: () =>
  //     import('./features/transactions/transactions.routes').then(
  //       (m) => m.TRANSACTION_ROUTES
  //     ),
  //   canActivate: [AuthGuard],
  // },
];
