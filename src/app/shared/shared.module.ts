import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { AllPackagesComponent } from './all-packages/all-packages.component';

@NgModule({
  declarations: [
    SliderComponent,
    CarouselComponent,
    CustomCardComponent,
    AllPackagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SliderComponent,
    CarouselComponent,
    CustomCardComponent,
    AllPackagesComponent
  ]
})
export class SharedModule { }
