import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  inactiveUsers:any ;
  
  constructor(private users: UserServicesService) { }
  
  ngOnInit(): void {
    this.inactiveUsers = this.users.getUsers();
  }

  activateUser: any;

  activate(user: any): void {
    this.activateUser = user;
    console.log(this.activateUser)
    this.activateUser.isDeleted = false;
  }

}
