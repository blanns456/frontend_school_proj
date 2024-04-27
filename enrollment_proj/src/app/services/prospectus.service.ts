import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProspectusService {
  constructor(private http: HttpClient) { }

  readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  student_all_prospectus() {
    return this.http.get(this.Root_URL + 'student-all-prospectus', { headers: this.headers });
  }

  student_academics() {
    return this.http.get(this.Root_URL + 'student-academics', { headers: this.headers });
  }

  student_current_prospectus() {
    return this.http.get(this.Root_URL + 'student-prospectus', { headers: this.headers });
  }

  submitted_already() {
    return this.http.get(this.Root_URL + 'already-submitted', { headers: this.headers });
  }


}
