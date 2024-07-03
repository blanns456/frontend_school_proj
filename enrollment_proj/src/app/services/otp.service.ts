import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  constructor(private http: HttpClient) {}
  // constructor(private http: HttpClient) { }

  readonly Root_URL = 'http://127.0.0.1:8000/api/v1/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  send_otp(info: { value: string }) {
    return this.http.post(this.Root_URL + 'register/otp', info);
  }

  verifyotp(otp: { otp: string }) {
    return this.http.post(this.Root_URL + 'register/verify', otp);
  }
}
