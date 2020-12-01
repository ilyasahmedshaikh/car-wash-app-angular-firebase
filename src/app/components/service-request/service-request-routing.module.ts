import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewServiceRequestComponent } from './new-service-request/new-service-request.component';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
import { ServiceRequestDetailsComponent } from './service-request-details/service-request-details.component';


const routes: Routes = [
  {
    path: '',
    component: ServiceRequestsComponent
  },
  {
    path: 'new-service-request',
    component: NewServiceRequestComponent
  },
  {
    path: 'service-requests',
    component: ServiceRequestsComponent
  },
  {
    path: 'service-request-details',
    component: ServiceRequestDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRequestRoutingModule { }
