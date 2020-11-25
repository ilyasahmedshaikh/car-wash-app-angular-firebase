import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {

  categoryCollection: string = "categories";
  data: any = [];

  constructor(
    private fireStore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.fireStore.collection(this.categoryCollection).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        
        let item = {
          id: doc.id,
          image: doc.data()['image'],
          name: doc.data()['name'],
        }

        this.data.push(item);
      });
    });    
  }

}
