import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input('data') data: any;
  @Input('cardType') cardType: string; //list or grid

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
