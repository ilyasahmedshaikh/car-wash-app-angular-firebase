import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  cardType: any = "grid";

  slideConfig = {
    "slidesToShow": 2, 
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true
  };

  imageSources: any = [
    'https://i.ytimg.com/vi/glzVsyDNMJg/hqdefault.jpg',
    'https://i.ytimg.com/vi/syK1OOrbZrc/hqdefault.jpg',
    'https://i.imgur.com/zPq0qkC.jpg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
