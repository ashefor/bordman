import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/observable'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseauth: AngularFireAuth, private router: Router) { 
    this.user = firebaseauth.authState;
    this.user.subscribe((user)=>{
      if(user) {
        this.userDetails = user;
        console.log(this.userDetails);
      }
      else{
        this.userDetails = null
      }
    })
  }

  isLoggedIn(){
    if(this.userDetails = null){
      return false;
    }
    else {
      return true;
    }
  }
  
  logout(){
    this.firebaseauth.auth.signOut().then((res) => this.router.navigate(['/']));
  }
  signup(){
    return this.firebaseauth.auth.createUserWithEmailAndPassword
  }

  // signUp(){
  //   const credential = firebase.auth.EmailAuthProvider.credential(email, password);
  //   return this.firebaseauth.auth.signInWithEmailAndPassword(email,password)
  // }
}
