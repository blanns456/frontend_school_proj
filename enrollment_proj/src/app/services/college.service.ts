import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, firstValueFrom  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private router: Router, private http: HttpClient) { }

  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  information(): Promise<any> {
    return firstValueFrom(this.http.get(this.Root_URL + 'info-student', { headers: this.headers }));
  }
}
