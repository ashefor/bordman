import { Component, OnInit } from '@angular/core';
import {FormBuilder } from "@angular/forms"
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.scss']
})
export class RecoverpasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
  }
  recoveryForm = this.fb.group({
    email: ['']
  })
  
  get f(){return this.recoveryForm.controls};

  onSubmit(){
    const email = this.f.email.value;
    this.authservice.ForgotPassword(email)
  }
}
