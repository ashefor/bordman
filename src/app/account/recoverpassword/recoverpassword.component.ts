import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from "@angular/forms"
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user';
import { NgbModal, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.scss']
})
export class RecoverpasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, 
    private authservice: AuthService, 
    private router: Router, 
    private modalservice: NgbModal, 
    private tabset: NgbTabsetConfig) { 
      tabset.justify ='center',
      tabset.type= 'tabs'
    }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalservice.open(content, { centered: true, windowClass: 'dark-modal' });
  }
  recoveryForm = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
  })

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.required])]
  })
  
  get f(){return this.recoveryForm.controls};
  get lgf() {return this.loginForm.controls}

  onSubmit(){
    const email = this.f.email.value;
    this.authservice.ForgotPassword(email)
  }
  login(){
    const email = this.lgf.email.value;
    const password = this.lgf.password.value;
    return this.authservice.signIn(email, password).then((res)=>{
      // this.SetUserData(us)
      this.router.navigate(['dashboard'])
      this.SetUserData(res.user);
    }).catch((error) => {
      window.alert(error.message)
      // this.loading = false;
      console.log(error.code)
    })
  }
  SetUserData(user) {
    // const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const userData: User = {
      email: user.email,
      password: user.password
    }
    // return userRef.set(userData, {
    //   merge: true
    // })
    return userData;
  }
}
