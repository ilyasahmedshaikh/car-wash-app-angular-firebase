import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-request-details',
  templateUrl: './service-request-details.component.html',
  styleUrls: ['./service-request-details.component.scss']
})
export class ServiceRequestDetailsComponent implements OnInit {

  data: any = {};

  constructor(
    private router: Router
  ) {
    this.data = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
