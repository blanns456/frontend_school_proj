// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AccountingController {
  // readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  token: any;

  // alertmessage: string | undefined;
  // alertmessag: Object;
  // static createuser: any;
  constructor(private http: HttpClient) { }

  getstudents() {
    return this.http.get(this.Root_URL + 'showstudents');
  }

  getmatrigroup() {
    return this.http.get(this.Root_URL + 'getmatrigroup');
  }

  showallitems() {
    return this.http.get(this.Root_URL + 'getitemMatri');
  }

  addMatriItems(items: { itemName: string; itemGroup: string }) {
    return this.http.post(this.Root_URL + 'additems', items);
  }
}
