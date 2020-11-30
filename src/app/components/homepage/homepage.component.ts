import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  cardType: any = "grid";
  selectedCategory: any = '';

  constructor(
  ) { }

  ngOnInit(): void {
  }

  getCategory(data) {
    console.log(data);
    this.selectedCategory = data;
  }

}
