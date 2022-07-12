import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/services/users';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  
  activeUsers!: User[];
  deactivateUser!: User;

  constructor(private users: UserServicesService ) { 
  }
  
  ngOnInit(): void {
    this.activeUsers = this.users.getUsers();
    //console.log(this.activeUsers);
  }

  deactivate(user: User): void {
    this.deactivateUser = user;
    //console.log(this.deactivateUser)
    this.deactivateUser.isDeleted = true;
  }

}
