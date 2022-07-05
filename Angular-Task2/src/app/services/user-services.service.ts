import { Injectable } from '@angular/core';
import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  users:User []= [
    {
      id: "1",
      firstName: "Anil",
      lastName: "Rathod",
      age: 32,
      login: "anil@gmail.com",
      password: "anil123",
      isDeleted: false, 
    },
    {
      id: "2",
      firstName: "Ram",
      lastName: "Lal",
      age: 39,
      login: "ram@gmail.com",
      password: "ram123",
      isDeleted: true, 
    },
    {
      id: "3",
      firstName: "Ajay",
      lastName: "Kumar",
      age: 26,
      login: "ajay@gmail.com",
      password: "ajay123",
      isDeleted: false, 
    },
    {
      id: "4",
      firstName: "Vijay",
      lastName: "Varma",
      age: 29,
      login: "vijay@gmail.com",
      password: "vijay123",
      isDeleted: false, 
    },
    {
      id: "5",
      firstName: "Vinay",
      lastName: "Reddy",
      age: 24,
      login: "vinay@gmail.com",
      password: "vinay123",
      isDeleted: true, 
    },
  ]

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserById(id: string ){
    return this.users.find(user => user.id === id);
  }

}
