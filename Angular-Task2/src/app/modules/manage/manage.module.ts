import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from 'src/app/components/manage-users/manage-users.component';
import { ManageRoutingModule } from './manage-routing.module';



@NgModule({
  declarations: [
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
