import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackNavigateService {

  public back = new Subject<boolean>();
  visible: boolean = false;

  constructor() { }

  toggleBackState() {
    this.visible = !this.visible;
    this.back.next(this.visible);
    console.log("from BackNavigateService", this.visible);
  }
}
