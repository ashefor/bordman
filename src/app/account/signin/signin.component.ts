import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loading = false;

  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) { }

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
    const password = this.f.password.value;
   return this.authservice.signIn(email, password).then(
    (res) => {
        this.router.navigate(['dashboard']);
      this.SetUserData(res.user);
    }).catch((error) => {
      window.alert(error.message)
      this.loading = false;
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
