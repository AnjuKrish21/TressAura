import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    { path: 'packages', loadChildren: () => import('./packages/packages.module').then(m => m.PackagesModule) }
  ];
  
