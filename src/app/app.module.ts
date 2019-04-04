import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, allRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './account/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './account/signup/signup.component';
import { RecoverpasswordComponent } from './account/recoverpassword/recoverpassword.component';
import { EnglandComponent } from './leagues/england/england.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    allRoutes,
    SigninComponent,
    SignupComponent,
    RecoverpasswordComponent,
    EnglandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
