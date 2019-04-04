import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { RecoverpasswordComponent } from './account/recoverpassword/recoverpassword.component';
import { EnglandComponent } from './leagues/england/england.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'account/signin', component: SigninComponent},
  {path: 'account/signup', component: SignupComponent},
  {path: 'account/recover', component: RecoverpasswordComponent},
  {path: 'leagues/england', component: EnglandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allRoutes = [HomeComponent, SigninComponent, SignupComponent, RecoverpasswordComponent, EnglandComponent]
