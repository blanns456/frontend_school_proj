import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject,firstValueFrom  } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  private token = localStorage.getItem('token');
  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  private myInformation = new BehaviorSubject<any>(null);

  constructor(private router: Router, private http: HttpClient) {}

  readonly Root_URL = 'http://127.0.0.1:8000/api/v1/';

  // Fetch and cache my information
  async information(): Promise<any> {
    if (!this.myInformation.value) {
      const observable = this.http.get<any>(this.Root_URL + 'my-information', { headers: this.headers }).pipe(
        tap(data => this.myInformation.next(data))
      );
      return firstValueFrom(observable);
    }
    return this.myInformation.value;
  }

  clearInformationCache() {
    this.myInformation.next(null);
  }

  // Create student
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
    return this.http.post(this.Root_URL + 'register/college', student, { headers: this.headers });
  }
}
