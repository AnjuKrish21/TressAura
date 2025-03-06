import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageEditComponent } from './package-edit/package-edit.component';

const routes: Routes = [
  { path: '', component: PackageListComponent },
  { path: 'edit/:id', component: PackageEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
