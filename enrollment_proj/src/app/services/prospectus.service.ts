import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProspectusService {
  constructor(private http: HttpClient) {}

  readonly Root_URL = 'http://127.0.0.1:8000/api/v1/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  student_all_prospectus(): Observable<any> {
    return this.http.get(this.Root_URL + 'program-courses', {
      headers: this.headers,
    });
  }

  course_offered() {
    return this.http.get(this.Root_URL + 'courses-offered', {
      headers: this.headers,
    });
  }

  student_current_prospectus(): Observable<any> {
    return this.http.get(this.Root_URL + 'student-prospectus', {
      headers: this.headers,
    });
  }

  submitted_already() {
    return this.http.get(this.Root_URL + 'already-submitted', {
      headers: this.headers,
    });
  }
}
