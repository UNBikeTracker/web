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
    const firstName = signupForm.controls['firstName'].value;
    const lastName = signupForm.controls['lastName'].value;
    const document = signupForm.controls['document'].value;
    const email = signupForm.controls['email'].value;
    const phone = signupForm.controls['phone'].value;
    const address = signupForm.controls['address'].value;
    const username = signupForm.controls['username'].value;
    const password = (<FormGroup> signupForm.controls['passwords']).controls['password'].value;
    const confirmPassword = (<FormGroup> signupForm.controls['passwords']).controls['confirmPassword'].value;
    const request = { firstName: firstName, lastName: lastName, document: document, email: email, phone: phone, address: address, username: username, password: password, confirmPassword: confirmPassword};
    this.restService.postLogin(JSON.stringify(request))
      .subscribe(
        response => {
          if (response.status === 200) {
            this.router.navigate(['auth/login']);
          }},
        error => error = error,
        () => { }
      );
  }
}
