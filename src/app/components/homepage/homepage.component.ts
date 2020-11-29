import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../core/services/packages/packages.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  cardType: any = "grid";

  categoryData: any = [];
  packagesData: any = [];

  constructor(
    private packages: PackagesService
  ) { }

  ngOnInit(): void {
    this.categoryData = this.packages.getCategories();
    this.packagesData = this.packages.getPackages();
  }

}
