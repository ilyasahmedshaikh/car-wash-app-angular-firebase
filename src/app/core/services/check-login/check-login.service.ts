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
}
