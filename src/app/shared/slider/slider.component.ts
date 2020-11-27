import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input('categories') categories: any;

  slideConfig = {
    "slidesToShow": 2, 
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
