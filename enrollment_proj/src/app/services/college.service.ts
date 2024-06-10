import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  constructor(private router: Router, private http: HttpClient) {}

<<<<<<< HEAD
  constructor(private router: Router, private http: HttpClient) { }

  readonly Root_URL = 'http://genesys.example.com/api/';
=======
  readonly Root_URL = 'http://127.0.0.1:8000/api/v1/';
>>>>>>> 48b605d239a3fb37cd1c9e9b22fb2681bb4ce93c
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  information(): Promise<any> {
    return firstValueFrom(
      this.http.get(this.Root_URL + 'info-student', { headers: this.headers })
    );
  }

    public createStudent(student: {
    last_name: string;
    first_name: string;
    middle_name: string;
    birth_date: string;
    religion: string;
    email: string;
    birth_place: string;
    citizenship: string;
    contact_number: string;
    gender: string;
    civil_status: string;
    enrolled_in: string;
    program: string;
    semester: string;
    year_level: string;
    student_status: string;
    }) {
      return this.http.post(this.Root_URL + 'register/college', student);
    }
}
