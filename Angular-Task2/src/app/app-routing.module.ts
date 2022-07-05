import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { DeleteUsersComponent } from './components/delete-users/delete-users.component';
import { HomeComponent } from './components/home/home.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "active",
    component: ActiveUsersComponent
  },
  {
    path: "deleted",
    component: DeleteUsersComponent
  },
  {
    path: "manage",
    loadChildren: () => import("./modules/manage/manage.module").then(module => module.ManageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
