import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-add-dialog-user',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatButtonModule,MatInputModule, MatFormFieldModule],
  templateUrl: './add-dialog-user.component.html',
  styleUrl: './add-dialog-user.component.scss'
})
export class AddDialogUserComponent {

}
