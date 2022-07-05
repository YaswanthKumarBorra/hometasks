import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  usersList: any;

  constructor(private users: UserServicesService) { }

  ngOnInit(): void {
    this.usersList = this.users.getUsers();
    //console.log(this.usersList);
  }

  selectedUser: any;

  userDetails(user: any): void {
    this.selectedUser = user;
  }

}
