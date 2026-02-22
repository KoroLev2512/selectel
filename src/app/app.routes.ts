import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu').then(m => m.Menu) }
];
