import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonsLibService as userService, User } from '@commons-lib';

import * as moment from 'moment';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  form: FormGroup;

  users: Array<User>;
  filteredUsers: Array<User>;

  saved!: boolean;
  error!: boolean;

  errorMsg!: string;

  constructor(private readonly fb: FormBuilder,
    private readonly userService: userService) {
    this.form = this.fb.group({
      vehicleId: ['']
    });

    this.users = new Array<User>();
    this.filteredUsers = new Array<User>();
  }

  ngOnInit(): void {
    this.saved = false;
    this.error = false;
    
    this.errorMsg = "";

    this.findActives();
  }

  ngOnDestroy(): void {
    if (this.users) {
      this.users = new Array<User>();
    }

    if (this.filteredUsers) {
      this.filteredUsers = new Array<User>();
    }
  }

  find(): void {
    let vehicleId = this.form.get('vehicleId')?.value;

    this.userService.findByVehicleId(vehicleId).subscribe((user: User) => {
      if (user) {
        if (user.isActive) {
          this.filteredUsers = new Array<User>();
          this.filteredUsers.push(user);
        }
      } else {
        this.errorMsg = "No records found";
        this.filteredUsers = new Array<User>();
      }
    });
  }

  findActives(): void {
    this.userService.findAllActives().subscribe((users: Array<User>) => {
      if (users && users.length > 0) {
        this.users = new Array<User>();

        users.forEach((user: User) => {
          this.users.push(user);
          this.filteredUsers.push(user);
        });
      } else {
        this.filteredUsers = new Array<User>();
        this.errorMsg = "No records found";
      }
    });
  }

  onComplete(user: User): void {
    user.isActive = false;
    user.updatedAt = new Date();

    this.userService.upsert(user).subscribe((user: User) => {
      if (user) {
        this.saved = true;

        setTimeout(() => {
          this.saved = false;
        }, 2000);
      } else {
        this.errorMsg = "Try again. Error to try to update the vehicle";

        this.error = true;

        setTimeout(() => {
          this.error = false;
        }, 2000);
      }

      this.findActives();
    });
  }

  getFormatedDate(date: Date): string {
    return moment(date).format('MM/DD/YYYY hh:mm:ss a');
  }
}
