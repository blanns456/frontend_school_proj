import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountingService {
  constructor(private http: HttpClient) {}

  readonly Root_URL = 'http://127.0.0.1:8000/api/';
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  getStudents(): Observable<any> {
    return this.http.get(this.Root_URL + 'showstudents', {
      headers: this.headers,
    });
  }

  getReceipt(studid: Number): Observable<any> {
    return this.http.get(this.Root_URL + 'getreceipt/' + studid, {
      headers: this.headers,
    });
  }

  getmopdata(): Observable<any> {
    return this.http.get(this.Root_URL + 'getmop', {
      headers: this.headers,
    });
  }

  showstudLedger(): Observable<any> {
    return this.http.get(this.Root_URL + 'showstudLedger', {
      headers: this.headers,
    });
  }

  gettelleruid(): Observable<any> {
    return this.http.get(this.Root_URL + 'generate-receipt', {
      headers: this.headers,
    });
  }

  allocateFees(paidAmount: number): Observable<any> {
    // console.log('send', paidAmount);
    return this.http.post(this.Root_URL + 'allocate-fees', paidAmount, {
      headers: this.headers,
    });
  }

  submitTransaction(datas: {
    student_id: number;
    mop: string;
    paydate: any;
    sem_id: number;
    paidAmount: number;
    onlinepayRef: string;
    itemfeeId: number;
    receiptId: number;
  }) {
    return this.http.post(this.Root_URL + 'savestud_transac', datas, {
      headers: this.headers,
    });
  }
}
