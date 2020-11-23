import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPackagesComponent } from './all-packages/all-packages.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  {
    path: '',
    component: AllPackagesComponent
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
