import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  cardType: any = "grid";

  constructor(
  ) { }

  ngOnInit(): void {
  }

}

