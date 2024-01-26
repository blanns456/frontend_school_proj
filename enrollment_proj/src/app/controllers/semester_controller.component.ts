// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SemesterController {
  // readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  readonly Root_URL = 'http://local.genesys.com/api/';
  token: any;

  constructor(private http: HttpClient) {}

  public createsemester(semester: {
    semester: string;
    active_year: string;
    status: string;
    enrollment_start: string;
    enrollment_end: string;
  }) {
    return this.http.post(this.Root_URL + 'addsem', semester);
  }

  public getsemester() {
    return this.http.get(this.Root_URL + 'showsem');
  }

  getactivenrollsem() {
    return this.http.get(this.Root_URL + 'actiivesem');
  }

  checkEnrollee(stud: { stud_id: any }) {
    return this.http.post(this.Root_URL + 'alreadyEnrolled', stud);
  }

  // public updatestatus() {
  //   return this.http.get(this.Root_URL + 'changesem');
  // }
}
