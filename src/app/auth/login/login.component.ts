import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RestService } from "../services/rest.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RestService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;
  private response: any;
  constructor(private fb: FormBuilder, private rest: RestService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  sendLogin(loginForm: FormGroup){
    let requestData = {
      username: loginForm.controls['username'].value,
      password: loginForm.controls['password'].value
    };

    this.rest.post('auth/signin', requestData)
      .subscribe(
        response => this.response = response,
        error => this.error = error,
      );
  }
}
