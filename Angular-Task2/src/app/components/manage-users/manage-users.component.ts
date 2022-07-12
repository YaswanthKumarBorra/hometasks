import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/services/users';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  usersList!: User[];
  user!: User;

  constructor(private users: UserServicesService) { }

  ngOnInit(): void {
    this.usersList = this.users.getUsers();
    //console.log(this.usersList);
  }
  
  userDetails(user: User): void {
    this.user = user;
  }

}
