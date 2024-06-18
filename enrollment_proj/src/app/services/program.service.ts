import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor(private http: HttpClient) {}
  // constructor(private http: HttpClient) { }

  readonly Root_URL = 'http://127.0.0.1:8000/api/v1/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  public getPrograms() {
    return this.http.get(this.Root_URL + 'programs');
  }
}
