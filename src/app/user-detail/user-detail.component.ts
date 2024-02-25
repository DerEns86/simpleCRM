import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase-service/firebase.service';
import { doc, docData } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogUserComponent } from '../edit-dialog-user/edit-dialog-user.component';
import { EditDialogAdressComponent } from '../edit-dialog-adress/edit-dialog-adress.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule,
    MatMenuModule,
    EditDialogUserComponent,
    EditDialogAdressComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit, OnDestroy{

  userId: string = '';
  user: User = new User(User);
 unsubscribe: any;

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute, 
    private firestore: FirebaseService) {
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
    if (this.unsubscribe) {
      this.unsubscribe.unsubscribe();
    }
  }

  openEditUser() {
    const dialog = this.dialog.open(EditDialogUserComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
    console.log('Edit user', this.user);
  }
  openEditAddress() {
    const dialog = this.dialog.open(EditDialogAdressComponent);
    dialog.componentInstance.user = new User(this.user);
    dialog.componentInstance.userId = this.userId;
    console.log('Edit address');
  }
}
  
