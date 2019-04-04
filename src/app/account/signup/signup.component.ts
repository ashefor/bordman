import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms"

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
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
    phoneNumber: ['']
  })

  goBack(){
    history.back()
  }
}
