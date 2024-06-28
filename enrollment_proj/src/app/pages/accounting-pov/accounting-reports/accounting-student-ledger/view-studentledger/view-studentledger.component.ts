import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import {
  MessageService,
  ConfirmationService,
  ConfirmEventType,
} from 'primeng/api';
import { AccountingService } from 'src/app/services/accounting.service';

@Component({
  selector: 'app-view-studentledger',
  templateUrl: './view-studentledger.component.html',
  styleUrls: ['./view-studentledger.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ViewStudentledgerComponent implements OnInit {
  studentData: any;
  approvedialog: boolean = false;
  showbtn: boolean = false;
  regisformDialog: boolean = false;
  info: any;
  acadlist: any;
  selectedSubs: any[] = [];
  subjectmatri: any;
  data: any;
  totalamount!: number;
  studid: any;

  constructor(
    private router: Router,
    private AccountingController: AccountingController,
    private messageService: MessageService,
    private AccountingService: AccountingService
  ) {
    this.studentData =
      this.router.getCurrentNavigation()?.extras.state?.['studentData'];
    console.log('Received student data:', this.studentData);
  }

  approveData() {
    this.showbtn = true;
    this.regisformDialog = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Approved',
      detail: 'Approved Ledger',
    });
  }

  viewstudmatri(studentData: any) {
    // this.router.navigate(['/accounting-matriculation-viewuser', studid]);
    const navigationExtras: NavigationExtras = {
      state: {
        studentData: studentData,
      },
    };
    this.router.navigate(
      ['/accounting-matriculation-viewuser'],
      navigationExtras
    );
  }

  showmodal(acadid: number) {
    this.approvedialog = true;
    this.getstudacad(acadid);
  }

  approveSubs(event: Event) {
    // this.confirmationService.confirm({
    //   target: event.target as EventTarget,
    //   message: 'Do you want to delete this record?',
    //   header: 'Delete Confirmation',
    //   icon: 'pi pi-info-circle',
    //   acceptButtonStyleClass: 'p-button-danger p-button-text',
    //   rejectButtonStyleClass: 'p-button-text p-button-text',
    //   acceptIcon: 'none',
    //   rejectIcon: 'none',

    //   accept: () => {
    //     this.selectedStudents.forEach((item) => {
    //       const studid = item.studid;
    //       this.AccountingController.deletestuds(studid).subscribe({
    //         next: (res) => {
    //           console.log(res);
    //           this.messageService.add({
    //             severity: 'info',
    //             summary: 'Confirmed',
    //             detail: 'Record deleted',
    //           });
    //         },
    //         error: (error: HttpErrorResponse) => {
    //           console.log(error.message);
    //         },
    //       });
    //     });
    //   },
    //   reject: () => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Rejected',
    //       detail: 'You have rejected',
    //     });
    //   },
    // });
    console.log('Selected subs to approve:', this.selectedSubs);
    this.messageService.add({
      severity: 'success',
      summary: 'Approved',
      detail: 'Approved Ledger',
    });
  }

  getstudacad(acadid: number) {
    this.AccountingController.getstudacad(acadid).subscribe({
      next: (res) => {
        this.info = res;
        this.acadlist = this.info[0];
        // console.log(this.acadlist);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  showSubjectmatri(studid: number) {
    this.AccountingService.showSubjectmatri(studid).subscribe({
      next: (response) => {
        this.data = response;
        this.subjectmatri = this.data[0];
        let total = 0;
        for (let item of this.subjectmatri) {
          this.totalamount = total += parseFloat(item.units);
        }
        // console.log(this.subjectmatri);
      },
      error: (error: HttpErrorResponse) => {
        // console.log(error.message);
        this.router.navigate(['/accounting/student ledger']);
      },
    });
  }

  ngOnInit(): void {
    this.studid = this.studentData['studid'];
    this.showSubjectmatri(this.studid);
    // if (this.studentData === 'undefined') {
    //   this.router.navigate(
    //   ['/accounting/student ledger']
    // );
    // }
  }

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
