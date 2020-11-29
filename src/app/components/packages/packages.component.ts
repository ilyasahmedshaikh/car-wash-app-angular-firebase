import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../core/services/packages/packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

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

