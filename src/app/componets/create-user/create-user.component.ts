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
    this.createUserForm();
    console.log(this.userForm.controls);
    setTimeout(() => {
      console.log(this.userForm.controls['firstName'].value);
    }, 100000);
  }
  createUserForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      gender: new FormControl(null),
      EnterDate: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
    });
  }
  userFormControls() {
    // return this.userForm.controls;
    // console.log(this.userForm.controls);
  }
  onUserCreate() {
    console.log(this.userForm);
  }
}
