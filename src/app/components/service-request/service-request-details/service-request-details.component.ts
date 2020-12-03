import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-request-details',
  templateUrl: './service-request-details.component.html',
  styleUrls: ['./service-request-details.component.scss']
})
export class ServiceRequestDetailsComponent implements OnInit {

  programForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      package: ['', Validators.required],
      datetime: ['', Validators.required],
      payment: ['', Validators.required],
      detailer: ['', Validators.required],
    });
  }

}
