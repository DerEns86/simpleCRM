import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase-service/firebase.service';
import { doc, docData } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit, OnDestroy{

  userId: string = '';
  user: User = new User(User);
 unsubscribe: any;

  constructor(private route: ActivatedRoute, private firestore: FirebaseService) {
   

  }

  ngOnInit() {
   this.unsubscribe = this.route.params.subscribe(paramMap => {
      this.userId = paramMap['id'];
      console.log(this.userId);
      let docRef = doc(this.firestore.firestore, 'users', this.userId);
      docData(docRef).subscribe((doc) => {
        this.user = doc as User; 
        console.log(this.user);
      });
    });
  }

  ngOnDestroy() {
   this.unsubscribe.unsubscribe();
  }
}
  
