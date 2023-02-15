import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'userlist', component:UserlistComponent},
  {path:'details/:usrname',component:DetailsComponent},
  {path:'signup',component:SignupComponent},
  {path:'update/:usrname', component:UpdateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
