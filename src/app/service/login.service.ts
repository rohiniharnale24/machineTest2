import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = `${environment.baseUrl}/profile`;
  constructor(private _http: HttpClient) {}

  onloginUser(user: any): void {
    // this._http.post<any>(this.baseUrl, user);
    localStorage.getItem('userInfo');
    console.log(localStorage.getItem('userInfo'));
  }
}
