import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = "ifunanya"
  heroes = [];
  odds = []
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    console.log(this.heroes)
  }

  logout(){
    this.authservice.SignOut()
  }
  addodds(event){
    this.heroes.push(event.target.value);
    console.log(this.heroes)
    console.log(event.target.value)
  }
}
