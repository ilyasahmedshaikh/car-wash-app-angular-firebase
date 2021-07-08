import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetStatusDescriptionService {

  constructor() { }

  // Status Types
  // 0 - Request Received
  // 1 - Arrived at Destination
  // 2 - Service Done
  // 3 - Payment Recieved

  getStatus(value) {
    if (value == 0) return "Request Received";
    if (value == 1) return "Arrived at Destination";
    if (value == 2) return "Service Done";
    if (value == 3) return "Payment Recieved";
  }
}
