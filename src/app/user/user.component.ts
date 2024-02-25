import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogUserComponent } from '../add-dialog-user/add-dialog-user.component';
import { User } from '../models/user.class';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FirebaseService } from '../firebase-service/firebase.service';
import { collection } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule
    ,MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    AddDialogUserComponent,
    MatCardModule,
    MatDividerModule,
    RouterModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})


export class UserComponent implements OnInit, OnDestroy {

  users = this.firestore.allUsers;
  userId: string = '';
   
  constructor(public dialog: MatDialog, private firestore: FirebaseService){ }

  ngOnInit(): void {
   
  }


getUsers(){
 return this.firestore.allUsers;
}

ngOnDestroy(): void {
 
}

  openDialog(){
    this.dialog.open(AddDialogUserComponent)
    console.log('open')
  }
}
