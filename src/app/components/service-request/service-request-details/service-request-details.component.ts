import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { CheckLoginService } from '../../../core/services/check-login/check-login.service';
import { FcmNotifyService } from '../../../core/http/fcm/fcm-notify/fcm-notify.service';
import { GetStatusDescriptionService } from '../../../core/services/get-status-description/get-status-description.service';

@Component({
  selector: 'app-service-request-details',
  templateUrl: './service-request-details.component.html',
  styleUrls: ['./service-request-details.component.scss']
})
export class ServiceRequestDetailsComponent implements OnInit {

  usersCollection: string = "users";
  serviceRequestCollection: string = "service-requests";

  data: any = {};
  detailers: any = [];
  userData: any = '';
  selectedDetailer: any = '';

  constructor(
    private router: Router,
    private fireStore: AngularFirestore,
    private checkLogin: CheckLoginService,
    private fcmNotify: FcmNotifyService,
    private statusDescription: GetStatusDescriptionService
  ) {
    this.data = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    console.log(this.data);
    this.getUserData();
  }

  getUserData() {
    this.userData = this.checkLogin.getUserData();
  }

  async getDetailers() {
    await this.fireStore.collection(this.usersCollection, ref => ref.where('user_type', '==', 'detailer')).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        let item = {
          id: doc.id,
          name: doc.data()['name'],
          image: doc.data()['image'],
          contact: doc.data()['contact'],
          email: doc.data()['email'],
          user_type: doc.data()['user_type'],
        }
        this.detailers.push(item);
      });
    });
  }

  selectDetailer(e) {
    let id = e.target.value;
    let detailer = this.detailers.filter(item => item.id == id)[0];
    this.selectDetailer = detailer;
  }

  updateServiceRequest() {
    this.fireStore.collection(this.serviceRequestCollection).doc(this.data.data.id).update({
      detailer: this.selectDetailer,
    })
    .then(res => {
      alert('Detailer Assigned');
      this.router.navigateByUrl("/service-request");
    })
    .catch(e => {
      console.log(e);
    })
  }

  // Status Types
  // 0 - Request Received
  // 1 - Arrived at Destination
  // 2 - Service Done
  // 3 - Payment Recieved
  updateDetailerStatus(status) {
    let statusDesc = this.statusDescription.getStatus(status);

    let data = {
      token: this.data.data.user.device_token,
      body: statusDesc,
      title: 'Dirt2Clean - Detailer',
    }
    
    this.fireStore.collection(this.serviceRequestCollection).doc(this.data.data.id).update({
      status: status,
    })
    .then(res => {
      alert('Status Updated');
      this.router.navigateByUrl("/service-request");
      this.notify(data);
    })
    .catch(e => {
      console.log(e);
    })
  }

  notify(data) {
    this.fcmNotify.Notify(data);
  }

}
