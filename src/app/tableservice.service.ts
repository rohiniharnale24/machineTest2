import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itable } from './model/userTable';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TableserviceService {
  tableUrl: string = `${environment.baseUrl}/posts`;
  constructor(private _httpClient: HttpClient) {}

  gettableData(): Observable<Itable[]> {
    return this._httpClient.get<Itable[]>(this.tableUrl);
  }
}
