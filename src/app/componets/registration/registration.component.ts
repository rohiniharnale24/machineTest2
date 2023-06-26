import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private _regService: RegistrationService) {}

  ngOnInit(): void {}
  onUserReg(f: NgForm) {
    console.log(f.value);

    this._regService.onUserReg(f.value);
    f.reset();
  }
}
