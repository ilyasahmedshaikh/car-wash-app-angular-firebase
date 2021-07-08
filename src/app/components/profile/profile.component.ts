import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { CheckLoginService } from '../../core/services/check-login/check-login.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data: any = {};

  programForm: FormGroup;
  usersCollection: string = "users";

  preview: any = "https://i.ibb.co/2MH630J/user.png";
  loading: any = "assets/img/loading.gif";
  percent: number = 0;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  imageUploaded: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private fireStore: AngularFirestore,
    private storage: AngularFireStorage,
    private checkLoginService: CheckLoginService
  ) {
    this.data = this.checkLoginService.getUserData();
  }

  ngOnInit(): void {
    this.formInit();
    this.setProfileData();
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  setProfileData() {
    this.data = this.checkLoginService.getUserData();
    this.preview = this.data.image;

    this.programForm.patchValue({
      name: this.data.name,
      email: this.data.email,
      contact: this.data.contact,
    })
  }

  updateProfile() {
    this.fireStore.collection(this.usersCollection).doc(this.data.id).update({
      image: this.preview,
      name: this.programForm.value.name,
      email: this.programForm.value.email,
      contact: this.programForm.value.contact,
    })
    .then(res => {
      alert('Profile Updated');

      // get updated profile data
      this.fireStore.collection('users').get().subscribe((res) => {
        res.docs.forEach((doc) => {
          let item = {
            id: doc.id,
            name: doc.data()['name'],
            image: doc.data()['image'],
            contact: doc.data()['contact'],
            email: doc.data()['email'],
            user_type: doc.data()['user_type'],
          }

          if (item.email == this.programForm.value.email) {
            this.checkLoginService.setLoginData(item);
          }
          this.setProfileData();

        });
      });
    })
    .catch(e => {
      console.log(e);
    })
  }

  uploadFile(event) {
    this.imageUploaded = !this.imageUploaded;
    
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe(res => this.percent = res );
    
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(res => {
          this.preview = res;

          this.imageUploaded = !this.imageUploaded;
        });
      })
    )
    .subscribe();
  }

}
