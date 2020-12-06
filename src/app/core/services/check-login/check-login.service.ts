import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  public status = new BehaviorSubject(false);

  constructor() { }

  setLoginStatus(status) {
    this.status.next(status);
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
