import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogUserComponent } from '../add-dialog-user/add-dialog-user.component';
import { User } from '../models/user.class';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FirebaseService } from '../firebase-service/firebase.service';




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    AddDialogUserComponent,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})


export class UserComponent implements OnInit, OnDestroy {


 
  constructor(public dialog: MatDialog, private userService: FirebaseService){ }

ngOnInit(): void {
 
}

ngOnDestroy(): void {
 
}

  openDialog(){
    this.dialog.open(AddDialogUserComponent)
    console.log('open')
  }
}
