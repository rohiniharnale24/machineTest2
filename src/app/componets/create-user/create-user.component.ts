import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  array: string[] = ['html', 'css', 'bootstrap', 'mongodb'];
  gender: string[] = ['Male', 'Female', 'Other'];
  constructor() {}

  ngOnInit(): void {
    console.log(this.userForm);

    this.createUserForm();
  }
  createUserForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl([null]),
      lastName: new FormControl([null, Validators.required]),
      gender: new FormControl([null]),
      EnterDate: new FormControl([null]),
      email: new FormControl([null], Validators.required),
      phoneNumber: new FormControl([null]),
      password: new FormControl([null]),
      confirmPassword: new FormControl([null]),
    });
  }
  get userFormControls() {
    return this.userForm.controls;
  }
  onUserCreate() {
    console.log(this.userForm);
  }
}
