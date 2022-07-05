import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  
  activeUsers:any;

  constructor(private users: UserServicesService ) { 
  }
  
  ngOnInit(): void {
    this.activeUsers = this.users.getUsers();
    //console.log(this.activeUsers);
  }

  deactivateUser: any;

  deactivate(user: any): void {
    this.deactivateUser = user;
    //console.log(this.deactivateUser)
    this.deactivateUser.isDeleted = true;
  }

}
