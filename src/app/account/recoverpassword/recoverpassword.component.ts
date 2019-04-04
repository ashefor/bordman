import { Component, OnInit } from '@angular/core';
import {FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.scss']
})
export class RecoverpasswordComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  recoveryForm = this.fb.group({
    email: ['']
  })
}
