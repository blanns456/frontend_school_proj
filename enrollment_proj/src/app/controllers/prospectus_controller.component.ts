// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProspectusController {
  readonly Root_URL = 'http://local.genesys.com/api/';
  token: any;
  procpectusdata: any;

  constructor(private http: HttpClient) {}

  public getcourses() {
    return this.http.get(this.Root_URL + 'courses');
  }

  public createProspectus(prospectus: {
    program: string;
    date_end: string;
    date_start: string;
  }) {
    return this.http.post(this.Root_URL + 'prospectus', prospectus);
  }

  public filterProspectus(filterPros: {
    name: string;
    sort: string;
    perPage: string;
    page: string;
  }) {
    return this.http.post(this.Root_URL + 'get-prospectus', filterPros);
  }

  public studentProspectus(getPros: { course: string; year_lvl: string }) {
    return this.http.post(this.Root_URL + 'students-prospectus', getPros);
  }

  addsubjects(subject: {
    prospectus_id: string;
    code: string;
    description: string;
    units: string;
    pre_requisite: string;
    year_lvl: string;
    semester: string;
  }) {
    return this.http.post(this.Root_URL + 'add-subject', subject);
  }

  studprospectus(getProspectus: {
    course: string;
    year_lvl: string;
    semester: string;
  }) {
    return this.http.post(this.Root_URL + 'student-prospectus', getProspectus);
  }

  isalreadysubmitted(semester: string, acadid: string) {
    return this.http.get(
      this.Root_URL + 'alreadysubmitted/' + semester + '/' + acadid
    );
  }
}
