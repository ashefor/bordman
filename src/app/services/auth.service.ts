import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable } from 'rxjs/observable'
import { Router } from '@angular/router';
import { User } from './user';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://apifootball.com/api/?action=get_countries&APIkey=4fa21719773c78a55ea0b34b23e3b939333412ed69f023d2e3071c13cdac4484";

  userData: any;

  constructor(public firebaseauth: AngularFireAuth, public firestore: AngularFirestore, public router: Router, public ngZone: NgZone, private http: HttpClient) {
    this.firebaseauth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }
      else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  getCountries(){
    return this.http.get(this.url);
  }


  signIn(email, password) {
    return this.firebaseauth.auth.signInWithEmailAndPassword(email, password)
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

  SignUp(email, password) {
    return this.firebaseauth.auth.createUserWithEmailAndPassword(email, password)
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.firebaseauth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['account/verify-email']);
      })
  }

  ForgotPassword(passwordResetEmail) {
    return this.firebaseauth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  logout() {
    this.firebaseauth.auth.signOut().then((res) => this.router.navigate(['/']));
  }


  SignOut() {
    return this.firebaseauth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      // this.router.navigate(['']);
    })
  }

  
}
