// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ProspectusController {
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token: any;

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

  public filterProspectus(
    filterPros: {
      name: string;
      sort: string;
      perPage: string;
      page: string;
    })
  {
    return this.http.post(this.Root_URL + 'get-prospectus', filterPros);
  }

  public studentProspectus(
    getPros: {
      course: string;
      year_lvl: string;
    })
  {
    return this.http.post(this.Root_URL + 'students-prospectus', getPros);
  }

}
