import { Component,OnInit } from '@angular/core';
import { user } from 'src/model/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  users:user[];
  user:user;
  user1:user= new user();
  search:string='k.r.kavin007@gmail.com';
  constructor(public userservice:UserService){

    }
    ngOnInit():void{
      this.userservice.getAllUsers().subscribe(data=>{
        this.users=data;
      });
     
      this.userservice.getUserByName(this.search).subscribe(data=>{this.user=data;});

      this.user1.firstName='Kaviyarasu';
      this.user1.lastName='Murugesan'
      this.user1.country='France'
      this.user1.email='kavirose789@gmail.com'
      this.user1.userName='kavirose07'

   //   this.userservice.addUser(this.user1).subscribe(data=>{console.log(data)});
    }
  

}
