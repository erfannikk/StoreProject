import { Component, OnInit, inject, viewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
     templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  myform: FormGroup;

   ngOnInit(): void {
    this.myform = new FormGroup({
      firstname : new FormControl('' , [Validators.required]),
      email : new FormControl('' , [Validators.required , Validators.email])
    });
    
};
 onSubmit(){
    console.log(this.myform);
  }
}