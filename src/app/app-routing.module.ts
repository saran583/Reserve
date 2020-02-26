import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { CancelComponent } from './cancel/cancel.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"view", component:ViewComponent},
  {path:"cancel", component:CancelComponent},
  {path:"login", component:LoginComponent},
  {path:"logout", component:LogoutComponent},

];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
