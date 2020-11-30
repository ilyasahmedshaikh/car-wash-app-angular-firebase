import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  categoryCollection: string = "categories";
  categories: any = [];

  slideConfig = {
    "slidesToShow": 2, 
    "slidesToScroll": 1,
    "arrows": false,
    "dots": true
  };

  constructor(
    private fireStore: AngularFirestore
  ) { }

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

        this.categories.push(item);
      });
    });
  }

}
