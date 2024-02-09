import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonsLibService as userService, User } from '@commons-lib';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit, OnDestroy {

  totalUsers: number;
  totalCars: number;
  totalMotorcycles: number;
  totalBicycles: number;

  activeUsers: Array<User>;
  inactiveUsers: Array<User>;

  constructor(private readonly userService: userService) {
    this.totalUsers = 0;
    this.totalCars = 0;
    this.totalMotorcycles = 0;
    this.totalBicycles = 0;

    this.activeUsers = new Array<User>();
    this.inactiveUsers = new Array<User>();
  }

  ngOnInit(): void {
    this.findActives();
    this.findInactives();
    this.findAllDistinct();
    this.findAllCars();
    this.findAllMotorcycle();
    this.findAllBicycle();
  }

  ngOnDestroy(): void {

  }

  findActives(): void {
    this.userService.findAllActives().subscribe((users: Array<User>) => {
      this.activeUsers = new Array<User>();
      if (users && users.length > 0) {
        users.forEach((user: User) => {
          this.activeUsers.push(user);
        });
      }
    });
  }

  findInactives(): void {
    this.userService.findAllInactives().subscribe((users: Array<User>) => {
      this.inactiveUsers = new Array<User>();
      if (users && users.length > 0) {
        users.forEach((user: User) => {
          this.inactiveUsers.push(user);
        });
      }
    });
  }

  findAllCars(): void {
    this.userService.findAllCars().subscribe((users: Array<User>) => {
      this.totalCars = 0;
      if (users && users.length > 0) {
        this.totalCars = users.length;
      }
    });
  }

  findAllMotorcycle(): void {
    this.userService.findAllMotorcycle().subscribe((users: Array<User>) => {
      this.totalMotorcycles = 0;
      if (users && users.length > 0) {
        this.totalMotorcycles = users.length;
      }
    });
  }

  findAllBicycle(): void {
    this.userService.findAllBicycle().subscribe((users: Array<User>) => {
      this.totalBicycles = 0;
      if (users && users.length > 0) {
        this.totalBicycles = users.length;
      }
    });
  }

  findAllDistinct(): void {
    this.userService.findAllDistinct().subscribe((users: Array<User>) => {
      this.inactiveUsers = new Array<User>();
      if (users && users.length > 0) {
        let temp = [...new Set(users.map(item => item.idType && item.idNumber))];

        this.totalUsers = temp.length;
      }
    });
  }
}
