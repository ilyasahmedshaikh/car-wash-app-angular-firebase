import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AllPackagesComponent } from './all-packages/all-packages.component';
import { AddPackageComponent } from './add-package/add-package.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddDetailerComponent } from './add-detailer/add-detailer.component';
import { AllDetailersComponent } from './all-detailers/all-detailers.component';


@NgModule({
  declarations: [AdminComponent, AllPackagesComponent, AddPackageComponent, AllCategoriesComponent, AddCategoryComponent, AddDetailerComponent, AllDetailersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
