import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  // signinForm = this.fb.group({
  //   email: [''],
  //   password: ['']
  // })

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })
}
