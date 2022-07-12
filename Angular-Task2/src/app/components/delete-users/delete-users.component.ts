import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/services/users';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  inactiveUsers!:User[] ;
  activateUser!: User;
  
  constructor(private users: UserServicesService) { }
  
  ngOnInit(): void {
    this.inactiveUsers = this.users.getUsers();
  }

  activate(user: User): void {
    this.activateUser = user;
    console.log(this.activateUser)
    this.activateUser.isDeleted = false;
  }

}
