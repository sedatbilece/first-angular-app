import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'calculator', loadComponent: () => import('./calculator/calculator').then(m => m.Calculator) },
];
