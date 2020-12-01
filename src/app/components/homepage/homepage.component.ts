import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../core/services/packages/packages.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  cardType: any = "grid";
  selectedCategory: any = '';

  constructor(
    private packageService: PackagesService
  ) { }

  ngOnInit(): void {
  }

  getCategory(data) {
    this.selectedCategory = data;
    this.packageService.setCategory(this.selectedCategory);
  }

}
