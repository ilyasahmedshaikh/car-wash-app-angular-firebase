import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.scss']
})
export class AllPackagesComponent implements OnInit {

  @Input('selectedCategory') selectedCategory: any;

  cardType: any = "grid";

  packagesCollection: string = "packages";
  packagesData: any = [];

  constructor(
    private fireStore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages() {
    this.fireStore.collection(this.packagesCollection).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        this.packagesData.push(doc.data());
      });
    });
  }

}
