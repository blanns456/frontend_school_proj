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

  getmatrigroup(categ_id: number) {
    return this.http.get(this.Root_URL + 'getmatrigroup/' + categ_id);
  }

  showallcategory() {
    return this.http.get(this.Root_URL + 'categorylist');
  }

  showallitemFees(groupid: number) {
    return this.http.get(this.Root_URL + 'getitemFees/' + groupid);
  }

  addMatriItems(items: {
    itemName: string;
    itemGroupid: number;
    amount: number;
    increase: number;
    percent: number;
  }) {
    return this.http.post(this.Root_URL + 'additems', items);
  }

  addcategory(category: { category_name: string; semesteryr: number }) {
    return this.http.post(this.Root_URL + 'addcategory', category);
  }

  addItemGroup(grpitems: { itemGroup: string; categ_id: number }) {
    return this.http.post(this.Root_URL + 'additemgroup', grpitems);
  }

  deleteItem(itemID: number) {
    return this.http.delete(this.Root_URL + `delete/${itemID}`);
  }

  deletestuds(studID: number) {
    return this.http.delete(this.Root_URL + `deletestuds/${studID}`);
  }
}
