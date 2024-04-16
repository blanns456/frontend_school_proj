import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateStudentServiceService {

  constructor(private http: HttpClient) { }

  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  updateStudent(data: FormData) {
    console.log(data);
    return this.http.post(this.Root_URL + 'update-student', data, { headers: this.headers });
  }

}
