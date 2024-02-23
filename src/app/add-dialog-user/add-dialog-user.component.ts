import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../models/user.class'; 



@Component({
  selector: 'app-add-dialog-user',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatButtonModule,MatInputModule, MatFormFieldModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-dialog-user.component.html',
  styleUrl: './add-dialog-user.component.scss'
})



export class AddDialogUserComponent {
  user : User = new User({});
birthdate: Date | undefined;

saveUser(){
  if(this.birthdate)
  this.user.birthdate = this.birthdate.getTime();
  console.log('user: ' , this.user)
}

}
