import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  cardType: any = "grid";

  topRecent = [
    {
      id: 1,
      imgUrl: 'https://carwow-uk-wp-2.imgix.net/Mini_Side.jpg',
      name: 'Bronze Package',
      amount: 1000,
      owner: 'Mini Size',
      type: 'mini-size'
    },
    {
      id: 2,
      imgUrl: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/audi_q3.jpg',
      name: 'Silver Package',
      amount: 2000,
      owner: 'Compact Suv',
      type: 'compact-suv'
    },
    {
      id: 3,
      imgUrl: 'https://www.budgetglacier.com/wp-content/uploads/2015/07/west-yellowstone-car-rental-Std-SUV-1024x682.jpg',
      name: 'Gold Package',
      amount: 38000,
      owner: 'Standard Suv',
      type: 'standard-suv'
    },
    {
      id: 4,
      imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191016-01-03-s-1571682849.jpg',
      name: 'Platinum Package',
      amount: 38000,
      owner: 'Compact Car',
      type: 'compact-car'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
