import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { CheckLoginService } from '../../../core/services/check-login/check-login.service';
import { PackagesService } from '../../../core/services/packages/packages.service';

@Component({
  selector: 'app-new-service-request',
  templateUrl: './new-service-request.component.html',
  styleUrls: ['./new-service-request.component.scss']
})
export class NewServiceRequestComponent implements OnInit {

  programForm: FormGroup;
  step: number = 1;
  serviceRequestCollection: string = "service-requests";
  loginStatus: boolean = false;

  categoryData: any = [];
  packagesData: any = [];

  selectedCategory: any = '';
  selectedPackage: any = '';

  constructor(
    private router: Router,
    private fireStore: AngularFirestore,
    private fb: FormBuilder,
    private packageService: PackagesService,
    private checkLogin: CheckLoginService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.ifLogin();
  }

  formInit() {
    this.programForm = this.fb.group({
      fullName: ['', Validators.required],
      mobile: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      package: ['', Validators.required],
      datetime: ['', Validators.required],
      payment: ['', Validators.required],
    });
  }

  next() {
    if (this.step < 2) {
      this.step += 1;
    }
  }

  back() {
    if (this.step == 2) {
      this.step -= 1;
    }
  }

  serviceRequest() {
    this.fireStore.collection(this.serviceRequestCollection).add({
      fullName: this.programForm.value.fullName,
      mobile: this.programForm.value.mobile,
      location: this.programForm.value.location,
      category: this.selectedCategory,
      package: this.selectedPackage,
      datetime: this.programForm.value.datetime,
      payment: this.programForm.value.payment,
      detailer: 'not-assigned',
    })
    .then(res => {
      // console.log(res);
      this.router.navigateByUrl("/service-request");
      this.programForm.reset();
    })
    .catch(e => {
      console.log(e);
    })
  }

  getCategory(data) {
    this.selectedCategory = data;
    this.packageService.setCategory(this.selectedCategory);
  }

  getPackage(data) {
    this.selectedPackage = data;
  }

  ifLogin() {
    this.checkLogin.status.subscribe(res => {
      this.loginStatus = res;
      
      if (!this.loginStatus) {
        this.router.navigateByUrl('/auth/login');
      }
    })
  }

}
