import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonsLibService, User } from '@commons-lib';

@Component({
  selector: 'app-user-upsert',
  templateUrl: './user-upsert.component.html',
  styleUrls: ['./user-upsert.component.scss']
})
export class UserUpsertComponent implements OnInit, OnDestroy {

  form: FormGroup;

  saved!: boolean;
  error!: boolean;

  errorMsg!: string;

  constructor(private readonly fb: FormBuilder,
    private readonly userService: CommonsLibService) {
    this.form = fb.group({
      fullname: ['', Validators.required],
      idType: ['', Validators.required],
      idNumber: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      vehicleId: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      vehicleType: ['', Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.saved = false;
    this.error = false;

    this.errorMsg = "";
  }

  ngOnDestroy(): void {

  }

  find(): void {
    let idType = this.form.get('idType')?.value;
    let idNumber = this.form.get('idNumber')?.value;

    this.userService.find(idType, idNumber).subscribe((user: User) => {
      if (user) {
        this.form.get('fullname')?.setValue(user.fullname);
        this.form.get('idType')?.setValue(user.idType);
        this.form.get('idNumber')?.setValue(user.idNumber);
        this.form.get('phone')?.setValue(user.phone);
        this.form.get('vehicleId')?.setValue(user.vehicleId);
        this.form.get('vehicleType')?.setValue(user.vehicleType);
        this.form.get('notes')?.setValue(user.notes);
      }
    });
  }

  send(): void {
    if (this.form.valid) {
      let user: User = {
        isActive: true,
        fullname: this.form.get('fullname')?.value,
        idType: this.form.get('idType')?.value,
        idNumber: this.form.get('idNumber')?.value,
        phone: this.form.get('phone')?.value,
        vehicleId: this.form.get('vehicleId')?.value,
        vehicleType: this.form.get('vehicleType')?.value,
        notes: this.form.get('notes')?.value
      };

      this.userService.find(user.idType, user.idNumber).subscribe((user: User) => {
        if (!user.isActive) {
          this.userService.upsert(user).subscribe((user: User) => {
            if (user) {
              this.clear();
              this.saved = true;

              setTimeout(() => {
                this.saved = false;
              }, 2000);
            }
          });
        } else {
          this.errorMsg = "User has an assigned vehicle now."

          this.error = true;

          setTimeout(() => {
            this.error = false;
          }, 2000);
        }
      });
    }
  }

  clear(): void {
    this.form.get('fullname')?.setValue('');
    this.form.get('idType')?.setValue('');
    this.form.get('idNumber')?.setValue('');
    this.form.get('phone')?.setValue('');
    this.form.get('vehicleId')?.setValue('');
    this.form.get('vehicleType')?.setValue('');
    this.form.get('notes')?.setValue('');
  }
}
