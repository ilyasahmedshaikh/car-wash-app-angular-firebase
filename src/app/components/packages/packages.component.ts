import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../core/services/packages/packages.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

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

