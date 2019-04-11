import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbModalConfig, NgbModal, NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;

  constructor(private router: Router, 
    private authservice: AuthService, 
    private fb: FormBuilder, 
    private modalservice: NgbModal,
    private tabset: NgbTabsetConfig) { 
      tabset.justify = 'center';
      tabset.type= 'tabs'
    }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalservice.open(content, { centered: true, windowClass: 'dark-modal' });
  }

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]
  })

  signUpForm = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
  })

  get f() { return this.loginForm.controls}
  get sf() { return this.signUpForm.controls}

  goBack(){
    history.back()
  }
  onSubmit(){
    this.loading = true;
    const email = this.f.email.value;
    const password = this.f.password.value;
   return this.authservice.signIn(email, password).then(
    (res) => {
        this.router.navigate(['dashboard']);
        this.modalservice.dismissAll();
      this.SetUserData(res.user);
    }).catch((error) => {
      window.alert(error.message)
      this.loading = false;
      console.log(error.code)
    })
  }

  addUser(){
    const email = this.sf.email.value;
    const password = this.sf.password.value;
    return this.authservice.SignUp(email,password).then(
      (result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.modalservice.dismissAll();
        this.router.navigate(['dashboard'])
        // this.authservice.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
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
