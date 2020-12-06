import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  public status = new BehaviorSubject(false);

  constructor() {
    let data = localStorage.getItem('user');
    if (data) {
      this.status.next(true);
    } else {
      this.status.next(false);
    }
  }

  setLoginStatus(status) {
    this.status.next(status);
  }

  logout() {
    localStorage.clear();
  }

  setLoginData(data) {
    let user = JSON.stringify(data);
    localStorage.setItem('user', user)
  }

  getUserData() {
    let data = localStorage.getItem('user');
    return JSON.parse(data)
  }
}
