import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-england',
  templateUrl: './england.component.html',
  styleUrls: ['./england.component.scss']
})
export class EnglandComponent implements OnInit {
  loggedIn = false;
  loggedOut = false;
  title = "England";
  league = false;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    if(this.authservice.isLoggedIn){
      return this.loggedIn = true;
    }
    else {
      return this.loggedOut = true
    }
  }
  toggleLeague(){
    this.league = !this.league;
  }
  logout(){
    this.authservice.SignOut()
  }
  goBack(){
    history.back();
  }
}
