import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  programForm: FormGroup;
  usersCollection: string = "users";
  loadingImg: any = "../../../../assets/img/loading.gif";
  loader: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private fireStore: AngularFirestore,
    private auth: AngularFireAuth,
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

  signup() {
    this.loader = true;

    // making authentic account for detailer in Database
    this.auth.createUserWithEmailAndPassword(this.programForm.value.email, this.programForm.value.password)
      .then(value => {
        console.log('Success!', value);

        // adding detailer to firestore for user_type and other profile biodata
        this.fireStore.collection(this.usersCollection).add({
          name: this.programForm.value.name,
          email: this.programForm.value.email,
          contact: this.programForm.value.contact,
          user_type: 'detailer',
        })
        .then(res => {
          console.log(res);
          this.loader = false;
          this.router.navigateByUrl("/auth/login");
          this.programForm.reset();
        })
        .catch(e => {
          console.log(e);
        })
      })
      .catch(err => {
        console.log('Something went wrong: ',err.message);
      });
  }

}
