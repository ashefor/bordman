import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { get } from 'selenium-webdriver/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  signUpForm = this.fb.group({
    firstname: ['', Validators.compose([Validators.required])],
    lastname: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    phoneNumber: ['']
  })

  get f() { return this.signUpForm.controls}

  goBack(){
    history.back()
  }

  onSubmit(){
    console.log(this.signUpForm.value)
  }
}
