import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-england',
  templateUrl: './england.component.html',
  styleUrls: ['./england.component.scss']
})
export class EnglandComponent implements OnInit {

  title = "England";
  league = false;
  constructor() { }

  ngOnInit() {
  }
  toggleLeague(){
    this.league = !this.league;
  }
}
