import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrimesterService {

  constructor(private http: HttpClient) {}

  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  add_trimester(trimester: any, academic_year1: any, academic_year2: any, enrollment_start: any, enrollment_end: any, trimester_start: any, trimester_end: any): Observable<any> {
    const payload = { trimester, academic_year1, academic_year2, enrollment_start, enrollment_end, trimester_start, trimester_end };
    return this.http.post(this.Root_URL + 'add-trimester', payload, { headers: this.headers });
  }

  enrollment() {
    return this.http.get(this.Root_URL + 'enrollment-trimester');
  }
}
