import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeanServicesService {


  constructor(private http: HttpClient) { }

  readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  dean_details() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.Root_URL + 'dean-details', { headers: headers });
  }

}