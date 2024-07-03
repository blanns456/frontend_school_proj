import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  private studentAllProspectusSubject = new BehaviorSubject<any[]>([]);
  private studentCurrentProspectusSubject = new BehaviorSubject<any[]>([]);
  private courseOfferedSubject = new BehaviorSubject<any[]>([]);
  private submittedAlreadySubject = new BehaviorSubject<any[]>([]);

  student_all_prospectus(): Observable<any[]> {
    if (this.studentAllProspectusSubject.value.length === 0) {
      return this.http.get<any[]>(this.Root_URL + 'program-courses', { headers: this.headers }).pipe(
        tap(data => this.studentAllProspectusSubject.next(data))
      );
    }
    return this.studentAllProspectusSubject.asObservable();
  }

  course_offered(): Observable<any[]> {
    if (this.courseOfferedSubject.value.length === 0) {
      return this.http.get<any[]>(this.Root_URL + 'courses-offered', { headers: this.headers }).pipe(
        tap(data => this.courseOfferedSubject.next(data))
      );
    }
    return this.courseOfferedSubject.asObservable();
  }

  student_current_prospectus(): Observable<any[]> {
    if (this.studentCurrentProspectusSubject.value.length === 0) {
      return this.http.get<any[]>(this.Root_URL + 'student-prospectus', { headers: this.headers }).pipe(
        tap(data => this.studentCurrentProspectusSubject.next(data))
      );
    }
    return this.studentCurrentProspectusSubject.asObservable();
  }

  submitted_already(): Observable<any[]> {
    if (this.submittedAlreadySubject.value.length === 0) {
      return this.http.get<any[]>(this.Root_URL + 'already-submitted', { headers: this.headers }).pipe(
        tap(data => this.submittedAlreadySubject.next(data))
      );
    }
    return this.submittedAlreadySubject.asObservable();
  }

  clearCache() {
    this.studentAllProspectusSubject.next([]);
    this.courseOfferedSubject.next([]);
    this.studentCurrentProspectusSubject.next([]);
    this.submittedAlreadySubject.next([]);
  }
}
