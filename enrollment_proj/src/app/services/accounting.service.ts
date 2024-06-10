import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {
  constructor(private http: HttpClient) { }

  readonly Root_URL = 'http://genesys.example.com/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  getStudents(): Observable<any> {
    return this.http.get(this.Root_URL + 'show-students', { headers: this.headers });
  }
}
