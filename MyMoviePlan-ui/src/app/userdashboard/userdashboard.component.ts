import { Component } from '@angular/core';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {
currentuser:string;
constructor(private loginservice:LoginService){}
ngOnInit(){
 this.currentuser= this.loginservice.getCurrentUser();
 if(this.currentuser=="0"){
  this.currentuser='Guest'
 }
}
}
