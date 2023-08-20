import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = `${environment.baseUrl}/profile`;
  constructor(private _http: HttpClient, private _router: Router) {}

  onloginUser(user: any): void {
    // this._http.post<any>(this.baseUrl, user);
    let getUser = JSON.parse(localStorage.getItem('userInfo')!);
    console.log(localStorage.getItem('userInfo'));
    if (getUser.username === user.username) {
      this._router.navigate(['dashboard']);
    } else {
      alert('please enter current userName');
    }
  }
}
