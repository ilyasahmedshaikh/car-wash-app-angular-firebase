import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  categoryCollection: string = "categories";
  packagesCollection: string = "packages";
  categoryData: any = [];
  packagesData: any = [];

  public selectedCategory = new Subject<any>();

  constructor(
    private fireStore: AngularFirestore
  ) { }

  getCategories() {
    this.fireStore.collection(this.categoryCollection).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        let item = {
          id: doc.id,
          image: doc.data()['image'],
          name: doc.data()['name'],
        }

        this.categoryData.push(item);
      });
    });  
    return this.categoryData;  
  }

  getPackages() {
    this.fireStore.collection(this.packagesCollection).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        this.packagesData.push(doc.data());
      });
    });
    return this.packagesData;
  }

  setCategory(value) {
    this.selectedCategory.next(value);
  }

}
