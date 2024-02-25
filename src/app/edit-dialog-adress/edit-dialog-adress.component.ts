import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FirebaseService } from '../firebase-service/firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-edit-dialog-adress',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule, CommonModule, MatProgressBarModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-dialog-adress.component.html',
  styleUrl: './edit-dialog-adress.component.scss'
})
export class EditDialogAdressComponent {
  public userId: string = '';
  constructor(public dialogRef: MatDialogRef<EditDialogAdressComponent>, private firebase: FirebaseService) { }
  user!: User ;
  birthdate: Date | undefined;
  loading = false;


  saveAdressChanges(){
    this.loading = true;
    this.firebase.updateUser(this.userId, this.user.toJson());
    this.dialogRef.close();
  }
}
