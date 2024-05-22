// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AccountingController {
  // readonly Root_URL = 'http://127.0.0.1:8000/api/';
  // readonly Root_URL = 'https://genesys-api.asc-bislig.com/api/';
  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token: any;

  // alertmessage: string | undefined;
  // alertmessag: Object;
  // static createuser: any;
  constructor(private http: HttpClient) {}

  getstudents() {
    return this.http.get(this.Root_URL + 'showstudents');
  }

  getstudentTransac(stud_id: number) {
    return this.http.get(this.Root_URL + 'getstudTransac/' + stud_id);
  }

  showtransacs(stud_id: number) {
    return this.http.get(this.Root_URL + 'showtransacs/' + stud_id);
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

  showSubjectmatri(studid: number) {
    return this.http.get(this.Root_URL + 'getsubjectmatri/' + studid);
  }

  // showstudentLedgerfees(studid: number) {
  //   return this.http.get(this.Root_URL + 'studentLedger/' + studid);
  // }

  getdepartments() {
    return this.http.get(this.Root_URL + 'getdepts');
  }

  getdeptsubject(deptid: number) {
    return this.http.get(this.Root_URL + 'getdeptsubs/' + deptid);
  }

  getcourses(id: number) {
    return this.http.get(this.Root_URL + 'getcoursdept/' + id);
  }

  getstudlabFees(studedntid: number) {
    return this.http.get(this.Root_URL + 'getstudlabFees/' + studedntid);
  }

  getlabfeesdb(courseid: number) {
    return this.http.get(this.Root_URL + 'getlabfee/' + courseid);
  }

  getfeesdepartment(deptID: number) {
    return this.http.get(this.Root_URL + 'getfeesdept/' + deptID);
  }

  getaddsFee(studid: number) {
    return this.http.get(this.Root_URL + 'getadditional/' + studid);
  }

  showstudLedger() {
    return this.http.get(this.Root_URL + 'showstudLedger');
  }

  getstudledger(studid: number) {
    return this.http.get(this.Root_URL + 'getstudledger/' + studid);
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

  addstudledger(datas: {
    studid: number;
    matrifees_id: number;
    matrifeetotal: number;
    labfeetotal: number;
    totalamount: number;
    totalTuitionfee: number;
    prevbalance: number;
    totaladdlfees: number;
    finalassessment: number;
    downpayment: number;
  }) {
    return this.http.post(this.Root_URL + 'addledger', datas);
  }

  addstudtransac(data: {
    student_id: number;
    studledgerId: number;
    mop: string;
    receiptNo: number;
    sem_id: number;
    paidAmount: number;
    description: string;
    status: number;
  }) {
    return this.http.post(this.Root_URL + 'addtransac', data);
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

  addlabfee(labfees: { subjectid: number; amount: number }) {
    return this.http.post(this.Root_URL + 'addlabfee', labfees);
  }

  addadditionalfee(addfees: {
    studid: number;
    itemname: string;
    ditionalAmount: number;
  }) {
    return this.http.post(this.Root_URL + 'addadditional', addfees);
  }

  updateFeesLedger(
    studid: number,
    updateData: {
      prevbal: number;
      downpayment: number;
    }
  ) {
    return this.http.post(this.Root_URL + `updateledg/${studid}`, updateData);
  }

  allocateFees(paidAmount: number) {
    return this.http.post(this.Root_URL + 'allocate-fees', paidAmount);
  }
}
