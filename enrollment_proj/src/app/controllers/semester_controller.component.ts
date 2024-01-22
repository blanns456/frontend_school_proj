// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SemesterController {
  // collegeinfo = {
  //   academic_year: '',
  //   semester: '',
  //   student_status: '',
  //   year_level: '',
  //   course: '',
  //   lastname: '',
  //   firstname: '',
  //   middlename: '',
  //   suffix: '',
  //   birthdate: '',
  //   religion: '',
  //   email_address: '',
  //   birth_place: '',
  //   citizenship: '',
  //   contactnumber: '',
  //   gender: '',
  //   civilstatus: '',
  //   permanentaddress: '',
  //   homeaddress: '',
  //   elemschool: '',
  //   elemyg: '',
  //   jhschool: '',
  //   jhsyg: '',
  //   shschool: '',
  //   shsyg: '',
  //   parentsOrguradian: '',
  //   parentsOccupation: '',
  //   parentcontactnumber: '',
  //   schoollastattended: '',
  //   lastschoolyearattended: '',
  //   status: '1',
  //   signature: '',
  // };

  // readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token: any;

  // alertmessage: string | undefined;
  // alertmessag: Object;
  // static createuser: any;
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
}
