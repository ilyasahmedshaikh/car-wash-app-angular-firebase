import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.scss']
})
export class AllPackagesComponent implements OnInit {

  data: any = [];

  constructor(
    private fireStore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages() {
    this.fireStore.collection("packages").get().subscribe((res) => {
      res.docs.forEach((doc) => {
        this.data.push(doc.data());
      });
    });
  }

}
