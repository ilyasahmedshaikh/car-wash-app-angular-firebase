import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { PackagesService } from '../../../core/services/packages/packages.service';

@Component({
  selector: 'app-new-service-request',
  templateUrl: './new-service-request.component.html',
  styleUrls: ['./new-service-request.component.scss']
})
export class NewServiceRequestComponent implements OnInit {

  programForm: FormGroup;
  step: number = 1;

  categoryData: any = [];
  packagesData: any = [];

  selectedCategory: any = '';
  selectedPackage: any = '';

  constructor(
    private router: Router,
    private fireStore: AngularFirestore,
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private packageService: PackagesService
  ) { }

  ngOnInit(): void {
    this.formInit();
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
    console.log(this.programForm.value);
  }

  getCategory(data) {
    this.selectedCategory = data;
    this.packageService.setCategory(this.selectedCategory);
  }

  getPackage(data) {
    this.selectedPackage = data;
    
  }


}
