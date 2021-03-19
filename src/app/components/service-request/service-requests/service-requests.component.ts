import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { CheckLoginService } from '../../../core/services/check-login/check-login.service';
import { BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';

@Component({
  selector: 'app-service-requests',
  templateUrl: './service-requests.component.html',
  styleUrls: ['./service-requests.component.scss']
})
export class ServiceRequestsComponent implements OnInit {

  programForm: FormGroup;
  data: any = [];

  serviceRequests: string = "service-requests";
  somethingWrong: boolean = false;

  loading: any = "../../../../assets/img/loading.gif";

  constructor(
    private fireStore: AngularFirestore,
    private fb: FormBuilder,
    private checkLogin: CheckLoginService,
    private backService: BackNavigateService
  ) { }

  ngOnInit(): void {
    this.getServiceRequests();

    setTimeout(item => {
      this.somethingWrong = true;
    }, 5000);
  }

  getUserData() {
    return this.checkLogin.getUserData();
  }

  getServiceRequests() {
    if (this.getUserData().user_type == 'user') {
      this.fireStore.collection(this.serviceRequests, ref => ref.where('user.email', '==', this.getUserData().email)).get().subscribe((res) => {
        res.docs.forEach((doc) => {
          let item = {
            id: doc.id,
            user: doc.data()['user'],
            location: doc.data()['location'],
            category: doc.data()['category'],
            package: doc.data()['package'],
            datetime: doc.data()['datetime'],
            payment: doc.data()['payment'],
            detailer: doc.data()['detailer'],
            status: doc.data()['status'],
          }
          this.data.push(item);
        });
      });
    }
    
    if (this.getUserData().user_type == 'detailer') {
      this.fireStore.collection(this.serviceRequests, ref => ref.where('detailer.email', '==', this.getUserData().email)).get().subscribe((res) => {
        res.docs.forEach((doc) => {
          let item = {
            id: doc.id,
            user: doc.data()['user'],
            location: doc.data()['location'],
            category: doc.data()['category'],
            package: doc.data()['package'],
            datetime: doc.data()['datetime'],
            payment: doc.data()['payment'],
            detailer: doc.data()['detailer'],
            status: doc.data()['status'],
          }
          this.data.push(item);
        });
      });
    }

    if (this.getUserData().user_type == 'admin') {
      this.fireStore.collection(this.serviceRequests).get().subscribe((res) => {
        res.docs.forEach((doc) => {
          let item = {
            id: doc.id,
            user: doc.data()['user'],
            location: doc.data()['location'],
            category: doc.data()['category'],
            package: doc.data()['package'],
            datetime: doc.data()['datetime'],
            payment: doc.data()['payment'],
            detailer: doc.data()['detailer'],
            status: doc.data()['status'],
          }
          this.data.push(item);
        });
      });
    }
  }

  backEnabled() {
    this.backService.toggleBackState();
  }

}
