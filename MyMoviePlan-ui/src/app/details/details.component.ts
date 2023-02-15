import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/model/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  user:user;
  constructor(private usrService:UserService, private route:ActivatedRoute){}
  ngOnInit(){
    
    const username = this.route.snapshot.paramMap.get('usrname');
    this.usrService.getUserByName(String(username)).subscribe(data=>this.user=data);
  }
}
