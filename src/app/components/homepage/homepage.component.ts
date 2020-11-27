import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  cardType: any = "grid";
  categoryCollection: string = "categories";
  packagesCollection: string = "packages";
  categoryData: any = [];
  packagesData: any = [];

  topRecent = [
    {
      id: 1,
      image: 'https://carwow-uk-wp-2.imgix.net/Mini_Side.jpg',
      name: 'Bronze Package',
      price: 1000,
      category: 'Mini Size',
    },
    {
      id: 2,
      image: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/audi_q3.jpg',
      name: 'Silver Package',
      price: 2000,
      category: 'Compact Suv',
    },
    {
      id: 3,
      image: 'https://www.budgetglacier.com/wp-content/uploads/2015/07/west-yellowstone-car-rental-Std-SUV-1024x682.jpg',
      name: 'Gold Package',
      price: 38000,
      category: 'Standard Suv',
    },
    {
      id: 4,
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191016-01-03-s-1571682849.jpg',
      name: 'Platinum Package',
      price: 38000,
      category: 'Compact Car',
    },
  ]

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
