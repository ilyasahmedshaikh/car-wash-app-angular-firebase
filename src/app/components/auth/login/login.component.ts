import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { CheckLoginService } from '../../../core/services/check-login/check-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  programForm: FormGroup;
  loginStatus: boolean = false;
  loadingImg: any = "../../../../assets/img/loading.gif";
  loader: boolean = false;

  constructor(
    private router: Router,
    private fireStore: AngularFirestore,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private checkLogin: CheckLoginService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.ifLogin();
  }

  formInit() {
    this.programForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loader = true;

    const email = this.programForm.value.email;
    const password = this.programForm.value.password;

    this.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Login Success');
      this.loader = true;
      this.checkLogin.setLoginStatus(true);
      this.router.navigateByUrl('/profile');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  ifLogin() {
    this.checkLogin.status.subscribe(res => {
      this.loginStatus = res;
      
      if (this.loginStatus) {
        this.router.navigateByUrl('/profile');
      }
    })
  }

}
