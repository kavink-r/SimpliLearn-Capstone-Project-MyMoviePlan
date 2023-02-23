import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { MovielistComponent } from './movielist/movielist.component';
import { CartComponent } from './cart/cart.component';
import { AddmovieComponent } from './addmovie/addmovie.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserlistComponent,
    DetailsComponent,
    SignupComponent,
    UpdateuserComponent,
    MovielistComponent,
    CartComponent,
    AddmovieComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
