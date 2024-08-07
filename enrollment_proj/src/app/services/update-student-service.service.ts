import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdateStudentServiceService {
  constructor(private http: HttpClient) {}

  readonly Root_URL = 'http://127.0.0.1:8000/api/v1/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  student_information() {
    return this.http.get(this.Root_URL + 'showstudentdetails', {
      headers: this.headers,
    });
  }

  updateStudent(data: FormData) {
    console.log(data);
    return this.http.post(this.Root_URL + 'update-information', data, {
      headers: this.headers,
    });
  }
}
