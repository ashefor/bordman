import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loading = false;

  constructor(private fb: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]
  })

  get f() { return this.loginForm.controls}

  goBack(){
    history.back()
  }

  onSubmit(){
    this.loading = true;
    const email = this.f.email.value;
    const password = this.f.password.value
    console.log(this.loginForm.value)
    this.authservice.signIn(email, password)
  }
}
