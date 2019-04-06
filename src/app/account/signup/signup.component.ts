import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { get } from 'selenium-webdriver/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  loading = false;
  constructor(private fb:FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
  }
  signUpForm = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    phoneNumber: ['']
  })

  get f() { return this.signUpForm.controls}

  goBack(){
    history.back()
  }

  onSubmit(){
    this.loading = true;
    const email = this.f.email.value;
    const password = this.f.password.value;
    console.log(this.signUpForm.value);
    this.authservice.SignUp(email, password)

  }
}
