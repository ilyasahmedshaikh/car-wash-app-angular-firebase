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
  loadingImg: any = "assets/img/loading.gif";
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
      this.loader = true;

      // get profile/bio of current Login User
      this.fireStore.collection('users').get().subscribe((res) => {
        res.docs.forEach((doc) => {
          let item = {
            id: doc.id,
            name: doc.data()['name'],
            image: doc.data()['image'],
            contact: doc.data()['contact'],
            email: doc.data()['email'],
            user_type: doc.data()['user_type'],
            device_token: doc.data()['device_token'],
          }

          if (item.email == email) {
            this.checkLogin.setLoginData(item);
          }
        });
      });

      this.checkLogin.setLoginStatus(true);
      this.router.navigateByUrl('/homepage');

      setTimeout(() => {
        location.reload();
      }, 2000);
    })
    .catch(err => {
      this.loader = false;
      alert(err.message);
      console.log('Something went wrong: ', err.message);
    });
  }

  ifLogin() {
    this.checkLogin.status.subscribe(res => {
      this.loginStatus = res;
      
      if (this.loginStatus) {
        this.router.navigateByUrl('/homepage');
      }
    })
  }

}
