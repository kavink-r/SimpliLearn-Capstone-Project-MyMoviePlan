import { Component } from '@angular/core';
import { status } from 'src/model/status';
import { user } from 'src/model/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  users: user[];
  constructor(private usrService: UserService) {

  }

  ngOnInit() {
    this.usrService.getAllUsers().subscribe(data => { this.users = data });
  }
  deleteUser(id: number) {

    this.usrService.deleteUser(id).subscribe(data => {
      if (data.status == '1') {
        this.users = this.users.filter(c => c.uid !== id);
      }
      console.log(data);
    });


  }
}
