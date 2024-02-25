import { Component} from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.class';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-edit-dialog-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule, CommonModule, MatProgressBarModule],
  templateUrl: './edit-dialog-user.component.html',
  styleUrl: './edit-dialog-user.component.scss'
})
export class EditDialogUserComponent {
  public userId: string = '';
  
  constructor(public dialogRef: MatDialogRef<EditDialogUserComponent>, private firebase : FirebaseService) { }

  user!: User ;
  birthdate: Date | undefined;
  loading = false;


  saveUserChanges(){
    this.loading = true;
    this.firebase.updateUser(this.userId, this.user.toJson());
    this.dialogRef.close();
  }
}
