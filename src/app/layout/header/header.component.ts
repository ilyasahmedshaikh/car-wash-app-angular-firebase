import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
import{ BackNavigateService } from '../../core/services/back-navigate/back-navigate.service';
import { CheckLoginService } from '../../core/services/check-login/check-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleButton: boolean = false;
  sidebar: boolean = false;
  fadeSection: boolean = false;
  backBtnState: boolean = false;
  loginStatus: boolean = false;
  userType: string = 'user';
  userData: any = 'https://i.ibb.co/2MH630J/user.png';

  constructor(
    private router: Router,
    private backNavigateService: BackNavigateService,
    private location: Location,
    private checkLogin: CheckLoginService
  ) {
    if(this.checkLogin.getUserData()) { this.userData = this.checkLogin.getUserData(); }
  }

  ngOnInit() {
    this.backNavigateService.back.subscribe(res => {
      this.backBtnState = res;
      console.log(res);
    });

    this.ifLogin();
    this.getUserType();
  }

  toggleMenu() {
    // animating icon
    this.toggleButton = !this.toggleButton;

    // animating sidebar
    this.sidebar = !this.sidebar;

    // enabling fade section 
    this.fadeSection = !this.fadeSection;
  }

  routeTo(route) {
    this.router.navigateByUrl(route);
    this.toggleMenu();
    // this.toggleBack();
  }

  toggleBack() {
    this.backNavigateService.toggleBackState();
  }

  back() {
    this.location.back();
    this.toggleBack();
  }

  ifLogin() {
    this.checkLogin.status.subscribe(res => {
      this.loginStatus = res;
      console.log("header-login", this.loginStatus);
    })
  }

  getUserType() {
    let data = this.checkLogin.getUserData();
    this.userType = data.user_type;
  }

  logout() {
    this.toggleMenu();
    this.checkLogin.setLoginStatus(false);
    this.checkLogin.logout();
    this.router.navigateByUrl("/auth/login");
  }

}

