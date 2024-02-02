import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'upsert',
    component: UserUpsertComponent
  }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserUpsertComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersModule { }
