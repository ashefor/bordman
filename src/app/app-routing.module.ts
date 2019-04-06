import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './account/signin/signin.component';
import { SignupComponent } from './account/signup/signup.component';
import { RecoverpasswordComponent } from './account/recoverpassword/recoverpassword.component';
import { EnglandComponent } from './leagues/england/england.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyEmailComponent } from './account/verify-email/verify-email.component';
import { AuthGuard } from './guard/auth.guard';
import { SecurePagesGuard } from './guard/secure-pages.guard';

const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurePagesGuard] },
  { path: 'account/signin', component: SigninComponent, canActivate: [SecurePagesGuard] },
  { path: 'account/signup', component: SignupComponent, canActivate: [SecurePagesGuard] },
  { path: 'account/forgot-password', component: RecoverpasswordComponent, canActivate: [SecurePagesGuard] },
  { path: 'leagues/england', component: EnglandComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'account/verify-email', component: VerifyEmailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allRoutes = [
  HomeComponent, 
  SigninComponent, 
  SignupComponent, 
  RecoverpasswordComponent, 
  EnglandComponent, 
  DashboardComponent, 
  VerifyEmailComponent]
