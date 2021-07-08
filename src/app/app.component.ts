import { Component } from '@angular/core';
import { MessagingService } from './core/http/messaging/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private messagingService: MessagingService,
  ) { }

  ngOnInit() {
    // this.permitPushNotifications();
  }

  permitPushNotifications() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    let message = this.messagingService.currentMessage;
  }
}
