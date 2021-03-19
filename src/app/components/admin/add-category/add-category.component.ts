import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  programForm: FormGroup;

  categoryCollection: string = "categories";
  data: any = '';

  preview: any = "../../../../assets/img/img-upload-icon.png";
  loading: any = "../../../../assets/img/loading.gif";
  percent: number = 0;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  imageUploaded: boolean = false;

  constructor(
    private router: Router,
    private fireStore: AngularFirestore,
    private storage: AngularFireStorage,
    private fb: FormBuilder
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.data;
    }
  }

  ngOnInit(): void {
    this.formInit();

    if (this.data) {
      this.preview = this.data.image;
      this.programForm.patchValue({
        name: this.data.name,
      })
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addCategory() {
    this.fireStore.collection(this.categoryCollection).add({
      image: this.preview,
      name: this.programForm.value.name,
    })
    .then(res => {
      // console.log(res);
      this.router.navigateByUrl("/admin/all-categories");
      this.programForm.reset();
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

  updateCategory() {
    this.fireStore.collection(this.categoryCollection).doc(this.data.id).update({
      image: this.preview,
      name: this.programForm.value.name,
    })
    .then(res => {
      alert('Category Updated');
      this.router.navigateByUrl("/admin/all-categories");
    })
    .catch(e => {
      console.log(e);
    })
  }

}
