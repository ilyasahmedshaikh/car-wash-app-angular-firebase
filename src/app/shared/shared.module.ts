import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './slider/slider.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CustomCardComponent } from './custom-card/custom-card.component';

@NgModule({
  declarations: [
    SliderComponent,
    CarouselComponent,
    CustomCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SliderComponent,
    CarouselComponent,
    CustomCardComponent,
  ]
})
export class SharedModule { }
