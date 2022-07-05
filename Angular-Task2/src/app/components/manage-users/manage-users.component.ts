import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/services/users';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  usersList: User[]=[];

  constructor(private users: UserServicesService) { }

  ngOnInit(): void {
    this.usersList = this.users.getUsers();
    //console.log(this.usersList);
  }

  user: any;

  getClassName() {
    return this.user.isDeleted === false ? 'activeUser' : 'inactiveUser'
  }

  getStatus() {
    return this.user.isDeleted === false ? "Active" : "Deleted"
  }

  
  userDetails(user: any): void {
    this.user = user;
  }

}
