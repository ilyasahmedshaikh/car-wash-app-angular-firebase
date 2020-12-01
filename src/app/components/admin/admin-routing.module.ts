import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPackagesComponent } from './all-packages/all-packages.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddDetailerComponent } from './add-detailer/add-detailer.component';
import { AllDetailersComponent } from './all-detailers/all-detailers.component';

const routes: Routes = [
  {
    path: '',
    component: AddPackageComponent
  },
  {
    path: 'all-packages',
    component: AllPackagesComponent
  },
  {
    path: 'add-package',
    component: AddPackageComponent
  },
  {
    path: 'all-categories',
    component: AllCategoriesComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: 'all-detailers',
    component: AllDetailersComponent
  },
  {
    path: 'add-detailer',
    component: AddDetailerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
