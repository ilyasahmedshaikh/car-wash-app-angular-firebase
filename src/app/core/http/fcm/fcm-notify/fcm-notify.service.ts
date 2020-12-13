import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FcmConfigService } from '../fcm-config/fcm-config.service';

@Injectable({
  providedIn: 'root'
})
export class FcmNotifyService {

  constructor(
    private http: HttpClient,
    private fcmConfig: FcmConfigService,
  ) { }

  // Notify
  public Notify(data) {
    const url = this.fcmConfig.fcmEndpoint;

    let headers = this.fcmConfig.headers();

    const notificationPayload = {
      "to" : data.token,
      "collapse_key" : "type_a",
      "notification" : {
          "sound" : "default",
          "body" : data.body,
          "title": data.title
      },
      "data" : {
          "body" : data.body,
          "title": data.title,
          "key_1" : "Value for key_1",
          "key_2" : "Value for key_2"
      }
     }

    this.http.post(url, notificationPayload, {headers}).subscribe(
      res =>{ console.log(res); },
      error => { console.log(error); alert(error.message); },
      () => { console.log('Notify Success'); }
    );
  }

}