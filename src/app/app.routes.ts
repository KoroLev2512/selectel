import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home.component';
import { MenuComponent } from '../pages/menu.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
];
