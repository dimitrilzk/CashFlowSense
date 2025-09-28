import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
    title: 'Register',
  },
];
