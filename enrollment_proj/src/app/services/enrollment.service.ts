import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  constructor(private http: HttpClient) {}
  // constructor(private http: HttpClient) { }

  readonly Root_URL = 'http://genesys.example.com/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  student_all_prospectus() {
    return this.http.get(this.Root_URL + 'student-all-prospectus', {
      headers: this.headers,
    });
  }

  college_enrollment(enrollment_transaction: { subjects: string }) {
    return this.http.post(
      this.Root_URL + 'enrollment-transaction',
      enrollment_transaction,
      { headers: this.headers }
    );
  }

  my_enrollment() {
    return this.http.get(this.Root_URL + 'my_enrollment', {
      headers: this.headers,
    });
  }
}
