import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  baseUrl: string = `${environment.baseUrl}/profile`;
  constructor(private _httpClient: HttpClient) {}
  onUserReg(userInfo: any): void {
    console.log(userInfo);
    // this._httpClient.post(this.baseUrl, userInfo);
    console.log(userInfo);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
}
