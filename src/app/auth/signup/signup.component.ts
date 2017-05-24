import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from "../services/rest.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [RestService]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  error: string;
  response: Response;
  constructor(private fb: FormBuilder,
              private restService: RestService,
              private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])],
      document: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      username: [null, Validators.compose([Validators.required])],
      passwords: this.fb.group({
        password: [null, Validators.compose([Validators.required])],
        confirmPassword: [null, Validators.compose([Validators.required])]
      }, {validator: Validators.compose([Validators.required])})
    });
  }

  sendSignupForm(signupForm: any) {
    let requestData = {
      firstName: signupForm.controls['firstName'].value,
      lastName: signupForm.controls['lastName'].value,
      document: signupForm.controls['document'].value,
      email: signupForm.controls['email'].value,
      phone: signupForm.controls['phone'].value,
      address: signupForm.controls['address'].value,
      username: signupForm.controls['username'].value,
      password: (<FormGroup> signupForm.controls['passwords']).controls['password'].value,
      confirmPassword: (<FormGroup> signupForm.controls['passwords']).controls['confirmPassword'].value
    };
    this.restService.post('auth/signup', requestData)
      .subscribe(
        response => {
          if (response.status === 200) {
            this.router.navigate(['auth/login']);
          }
        },
        error => error = error,
        () => { }
      );
  }
}
