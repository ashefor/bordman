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
  odds = [];
  stakes = '';
  newstakes;
  constructor(private authservice: AuthService) { }

  ngOnInit() {
    console.log(this.heroes)
  }

  logout(){
    this.authservice.SignOut()
  }
  addodds(event){
    if(this.heroes.length === 0){
      this.heroes.push(event.target.value);
    console.log(this.heroes)
    console.log(event.target.value)
    }else{
      window.alert('One selection per ticket');
      return
    }
  }
  stakeAmount(value: string){
    this.stakes = value;
      console.log(this.stakes)
      this.newstakes = parseFloat(this.stakes).toFixed(2);
  }
  removethisgame(){
    this.heroes.splice(this.heroes.indexOf(''), 1);
  }
  removegame(){
    this.heroes.pop();
  }
}
