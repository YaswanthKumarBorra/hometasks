import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  componentName = "user";
  userName: string = '';
  show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  setName(name: string): void{
    this.userName = name;
    this.show = true
  }

  getName(): string{
    return this.userName;
  }

}
