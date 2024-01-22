// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SemesterController {
  // readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token: any;

  constructor(private http: HttpClient) {}

  public createsemester(semester: {
    semester: string;
    start_date: string;
    end_date: string;
    status: string;
  }) {
    return this.http.post(this.Root_URL + 'addsem', semester);
  }

  public getsemester() {
    return this.http.get(this.Root_URL + 'showsem');
  }

  getactivenrollsem() {
    return this.http.get(this.Root_URL + 'actiivesem');
  }

  // public updatestatus() {
  //   return this.http.get(this.Root_URL + 'changesem');
  // }
}
