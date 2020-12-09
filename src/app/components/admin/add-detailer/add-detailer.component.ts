import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-detailer',
  templateUrl: './add-detailer.component.html',
  styleUrls: ['./add-detailer.component.scss']
})
export class AddDetailerComponent implements OnInit {

  data: any;
  programForm: FormGroup;
  usersCollection: string = "users";
  loading: any = "../../../../assets/img/loading.gif";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private fireStore: AngularFirestore,
    private auth: AngularFireAuth,
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.data;
    }
  }

  ngOnInit(): void {
    this.formInit();
    console.log(this.data);
    
    if (this.data) {
      this.programForm.patchValue({
        name: this.data.name,
        email: this.data.email,
        contact: this.data.contact,
        password: this.data.password,
      })
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      // password: ['', Validators.required],
    });
  }

  addDetailer() {
    // making authentic account for detailer in Database
    this.auth.createUserWithEmailAndPassword(this.programForm.value.email, this.programForm.value.password)
      .then(value => {
        console.log('Success!', value);

        // adding detailer to firestore for user_type and other profile biodata
        this.fireStore.collection(this.usersCollection).add({
          image: 'https://i.ibb.co/2MH630J/user.png',
          name: this.programForm.value.name,
          email: this.programForm.value.email,
          contact: this.programForm.value.contact,
          user_type: 'detailer',
        })
        .then(res => {
          console.log(res);
          this.router.navigateByUrl("/admin/all-detailers");
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

  updateDetailer() {
    this.fireStore.collection(this.usersCollection).doc(this.data.id).update({
      name: this.programForm.value.name,
      email: this.programForm.value.email,
      contact: this.programForm.value.contact,
      // password: this.programForm.value.password,
    })
    .then(res => {
      alert('Detailer Updated');
      this.router.navigateByUrl("/admin/all-detailers");
    })
    .catch(e => {
      console.log(e);
    })
  }

}
