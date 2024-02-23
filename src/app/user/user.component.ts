import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogUserComponent } from '../add-dialog-user/add-dialog-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    AddDialogUserComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

 
  constructor(public dialog: MatDialog){ }

  openDialog(){
    this.dialog.open(AddDialogUserComponent)
    console.log('open')
  }
}
