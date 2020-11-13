import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackageDetailsRoutingModule } from './package-details-routing.module';
import { PackageDetailsComponent } from './package-details.component';


@NgModule({
  declarations: [PackageDetailsComponent],
  imports: [
    CommonModule,
    PackageDetailsRoutingModule
  ]
})
export class PackageDetailsModule { }
