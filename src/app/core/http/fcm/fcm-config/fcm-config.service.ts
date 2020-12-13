import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FcmConfigService {

  fcmEndpoint = 'https://fcm.googleapis.com/fcm/send';
  fcmLeagcyServerKey = 'AAAAVoiFh3Q:APA91bE1DFVFp62oJ2xwtFrkA2Uu286nP3paS3af3PVIpC0nEWQNbT3xjCYWg49Cld6w3CCdmEAGIeIdBueCkpKI6rHTIwEevq5PEufScu_6Ay_HjsnwBS1Im_lkBLMvPCSfLb7VztkZ';

  constructor() { }

  headers() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": "key="+this.fcmLeagcyServerKey
    });
  }
  
}