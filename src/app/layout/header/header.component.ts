import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleButton: boolean = false;
  sidebar: boolean = false;
  fadeSection: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
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
  }

}

