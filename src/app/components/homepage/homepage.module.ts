import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomepageRoutingModule,
    SharedModule,
    SlickCarouselModule,
  ]
})
export class HomepageModule { }
