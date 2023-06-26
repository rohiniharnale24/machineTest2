import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _router: Router, private _loginService: LoginService) {}

  ngOnInit(): void {
    // onUserLogin( userInfo : HTMLInputElement){
    // }
  }
  @ViewChild('f') loginForm!: NgForm;
  onLogin(f: NgForm) {
    console.log(f.value);
    this._loginService.onloginUser(f.value);
    this._router.navigate(['dashboard']);
  }
}
