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

  constructor(
    private fireStore: AngularFirestore,
    private backService: BackNavigateService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers() {
    await this.fireStore.collection(this.usersCollection, ref => ref.where('user_type', '==', 'detailer')).get().subscribe((res) => {
      res.docs.forEach((doc) => {
        console.log(doc.data());
        this.data.push(doc.data());
      });
    });
  }

  backEnabled() {
    this.backService.toggleBackState();
  }

}
