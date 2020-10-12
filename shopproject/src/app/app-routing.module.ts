import { LoginComponent } from './view/auth/login/login.component';
import { SignupComponent } from './view/auth/signup/signup.component';
import { HistoryComponent } from './admin-view/history/history.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './view/cart/cart.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path: 'members/activate', component: LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
