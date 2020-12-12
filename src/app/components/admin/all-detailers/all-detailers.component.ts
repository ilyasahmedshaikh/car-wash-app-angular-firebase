import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BackNavigateService } from '../../../core/services/back-navigate/back-navigate.service';

@Component({
  selector: 'app-all-detailers',
  templateUrl: './all-detailers.component.html',
  styleUrls: ['./all-detailers.component.scss']
})
export class AllDetailersComponent implements OnInit {

  data: any = [];
  usersCollection: string = "users";
  somethingWrong: boolean = false;

  constructor(
    private fireStore: AngularFirestore,
    private backService: BackNavigateService
  ) {}

  ngOnInit(): void {
    this.getUsers();

    setTimeout(item => {
      this.somethingWrong = true;
    }, 5000);
  }

  async getUsers() {
    await this.fireStore.collection(this.usersCollection, ref => ref.where('user_type', '==', 'detailer')).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        let item = {
          id: doc.id,
          name: doc.data()['name'],
          image: doc.data()['image'],
          contact: doc.data()['contact'],
          email: doc.data()['email'],
          user_type: doc.data()['user_type'],
        }
        this.data.push(item);
      });
    });
  }

  backEnabled() {
    this.backService.toggleBackState();
  }

}
