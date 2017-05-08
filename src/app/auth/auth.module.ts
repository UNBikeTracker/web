import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MdButtonModule, MdCardModule, MdInputModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdInputModule,
    ReactiveFormsModule,
    FormsModule,
    MdButtonModule
  ],
  declarations: [LoginComponent, SignupComponent, ForgotComponent]
})
export class AuthModule { }
