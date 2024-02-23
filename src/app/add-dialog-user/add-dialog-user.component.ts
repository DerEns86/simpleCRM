import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../models/user.class';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-dialog-user',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatProgressBarModule,],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-dialog-user.component.html',
  styleUrl: './add-dialog-user.component.scss'
})



export class AddDialogUserComponent {
  user: User = new User({});
  birthdate: Date | undefined;
  loading = false;

  constructor(
    private userService: FirebaseService,
    private dialogRef: MatDialogRef<AddDialogUserComponent>) { }

  saveUser() {
    if (this.birthdate)
      this.user.birthdate = this.birthdate.getTime();
    this.loading = true;
    console.log('user: ', this.user)
    // console.log(this.userService.getUserRef());
    // console.log(this.userService.snapShotUserList());
    this.userService.addUser(this.user.toJson());
    this.dialogRef.close();

  }

}
