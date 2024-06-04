import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import {
  MessageService,
  ConfirmationService,
  ConfirmEventType,
} from 'primeng/api';
import { Router, NavigationExtras } from '@angular/router';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-accounting-student-ledger',
  templateUrl: './accounting-student-ledger.component.html',
  styleUrls: ['./accounting-student-ledger.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AccountingStudentLedgerComponent implements OnInit {
  data: any;
  students: any;
  info: any;
  acadlist: any;

  constructor(
    private messageService: MessageService,
    private AccountingController: AccountingController,
    private confirmationService: ConfirmationService,
    private router: Router,
    private accounting: AccountingService
  ) {}

  viewUser(student: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        studentData: student,
      },
    };
    this.router.navigate(['/accounting/view student ledger'], navigationExtras);
  }

  ngOnInit(): void {
    this.accounting.getStudents().subscribe({
      next: (res) => {
        this.data = res;
        this.students = this.data[0];
      },
      error: () => {
      },
    });
    // this.getstudents();
  }

  // getstudents() {
  //   this.AccountingController.getstudents().subscribe({
  //     next: (res) => {
  //       this.data = res;
  //       this.students = this.data[0];
  //       // console.log(this.students);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       console.log(error.message);
  //     },
  //   });
  // }

  getYearLevelString(yearLevel: number): string {
    const lastDigit = yearLevel % 10;
    const lastTwoDigits = yearLevel % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${yearLevel}th year`;
    } else {
      switch (lastDigit) {
        case 1:
          return `${yearLevel}st Year`;
        case 2:
          return `${yearLevel}nd Year`;
        case 3:
          return `${yearLevel}rd Year`;
        default:
          return `${yearLevel}th Year`;
      }
    }
  }
}
