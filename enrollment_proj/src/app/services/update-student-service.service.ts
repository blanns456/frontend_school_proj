import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdateStudentServiceService {
  constructor(private http: HttpClient) {}

  readonly Root_URL = 'http://genesys.example.com/api/';
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
    return this.http.post(this.Root_URL + 'update-student', data, {
      headers: this.headers,
    });
  }
}
