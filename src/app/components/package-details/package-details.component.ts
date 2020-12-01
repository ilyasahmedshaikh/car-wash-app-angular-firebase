import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {

  data: any = '';

  constructor(
    private router : Router
  ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
  }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
