import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRequestRoutingModule } from './service-request-routing.module';
import { ServiceRequestComponent } from './service-request.component';
import { NewServiceRequestComponent } from './new-service-request/new-service-request.component';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';


@NgModule({
  declarations: [ServiceRequestComponent, NewServiceRequestComponent, ServiceRequestsComponent],
  imports: [
    CommonModule,
    ServiceRequestRoutingModule
  ]
})
export class ServiceRequestModule { }
