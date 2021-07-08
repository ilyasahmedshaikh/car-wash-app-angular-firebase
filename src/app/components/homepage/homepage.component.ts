import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesService } from '../../core/services/packages/packages.service';
import { CheckLoginService } from '../../core/services/check-login/check-login.service';
import { MessagingService } from '../../core/http/messaging/messaging.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  cardType: any = "grid";
  selectedCategory: any = '';
  loginStatus: boolean = false;

  constructor(
    private router: Router,
    private packageService: PackagesService,
    private checkLogin: CheckLoginService,
    private messagingService: MessagingService,
  ) { }

  ngOnInit(): void {
    // this.ifLogin();
    this.permitPushNotifications();
  }

  getCategory(data) {
    this.selectedCategory = data;
    this.packageService.setCategory(this.selectedCategory);
  }

  ifLogin() {
    this.checkLogin.status.subscribe(res => {
      this.loginStatus = res;
      
      if (this.loginStatus) {
        this.router.navigateByUrl('/homepage');
      } else {
        this.router.navigateByUrl('/auth/login');
      }
    })
  }

  permitPushNotifications() {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    let message = this.messagingService.currentMessage;
  }

}
