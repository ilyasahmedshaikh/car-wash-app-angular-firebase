import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  cardType: any = "grid";

  categoryCollection: string = "categories";
  packagesCollection: string = "packages";
  categoryData: any = [];
  packagesData: any = [];

  constructor(
    private fireStore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getPackages();
  }

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
  }

  getPackages() {
    this.fireStore.collection(this.packagesCollection).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        this.packagesData.push(doc.data());
      });
    });
  }

}

