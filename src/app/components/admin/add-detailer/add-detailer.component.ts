import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-detailer',
  templateUrl: './add-detailer.component.html',
  styleUrls: ['./add-detailer.component.scss']
})
export class AddDetailerComponent implements OnInit {

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
      email: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
