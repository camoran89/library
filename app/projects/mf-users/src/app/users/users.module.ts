import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
})
export class UsersModule { }
