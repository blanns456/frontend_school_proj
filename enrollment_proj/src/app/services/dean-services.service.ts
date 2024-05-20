import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class DeanServicesService {
  constructor(private http: HttpClient) { }

  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  dean_details() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.Root_URL + 'dean-details', { headers: headers });
  }

  for_approval_students() {
    return this.http.get(this.Root_URL + 'for-approval-students', { headers: this.headers });
  }

  approve_student(acadid: any, id: any, courses_id: any, student_yr_lvl: any): Observable<any> {
    const payload = { acadid, id, courses_id, student_yr_lvl };
    return this.http.post(this.Root_URL + 'approve-course', payload, { headers: this.headers });
  }

  getSections(): Observable<any> {
    return this.http.get(this.Root_URL + 'sections', { headers: this.headers });
  }

  getStudentsInSection(sectionId: number): Observable<any> {
    return this.http.get(`${this.Root_URL}sections/${sectionId}/students`, { headers: this.headers });
  }

}
