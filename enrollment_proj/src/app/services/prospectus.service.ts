import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProspectusService {

  constructor(private http: HttpClient) { }

  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  student_prospectus() {
    // console.log(data);
    return this.http.get(this.Root_URL + 'student-all-prospectus', { headers: this.headers });

  }

}
