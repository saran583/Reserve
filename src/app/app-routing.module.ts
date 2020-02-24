import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { CancelComponent } from './cancel/cancel.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"view", component:ViewComponent},
  {path:"cancel", component:CancelComponent},
  {path:"login", component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
