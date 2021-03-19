import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Output() selectCategory = new EventEmitter<any>();

  categoryCollection: string = "categories";
  categories: any = [];
  selectedCategory: any = '';

  somethingWrong: boolean = false;

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

    setTimeout(item => {
      this.somethingWrong = true;
    }, 5000);
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

  categoryClicked(data) {
    this.selectedCategory = data;
    this.selectCategory.emit(data);
  }

}
