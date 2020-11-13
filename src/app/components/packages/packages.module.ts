import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';


@NgModule({
  declarations: [PackagesComponent],
  imports: [
    CommonModule,
    SharedModule,
    PackagesRoutingModule
  ]
})
export class PackagesModule { }
