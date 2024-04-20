import { Component, OnInit } from '@angular/core';
import DataTable from 'datatables.net-dt';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { Router, NavigationExtras } from '@angular/router';
import {
  MessageService,
  PrimeNGConfig,
  ConfirmationService,
  ConfirmEventType,
} from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-accounting-matriculation',
  templateUrl: './accounting-matriculation.component.html',
  styleUrls: ['./accounting-matriculation.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AccountingMatriculationComponent implements OnInit {
  selectFilter = [
    { id: 1, deptname: 'College of Teacher Education' },
    { id: 2, deptname: 'College of Business Education' },
    { id: 3, deptname: 'College of Computer Education' },
    { id: 4, deptname: 'College of Criminal Justice Education' },
    { id: 5, deptname: 'TESDA Course' },
  ];
  selectedFilters: any[] = [];
  dataTable: any;
  students: any[] = [];
  data: any;
  selectedStudents: any[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private AccountingController: AccountingController,
    private router: Router
  ) {}

  viewUser(student: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        studentData: student,
      },
    };
    this.router.navigate(
      ['/accounting-matriculation-viewuser'],
      navigationExtras
    );
  }

  // filterInput(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
  //   this.students = this.data[0].filter(
  //     (item: { [s: string]: unknown } | ArrayLike<unknown>) =>
  //       Object.values(item).some((value) =>
  //         String(value).toLowerCase().includes(filterValue)
  //       )
  //   );
  //   console.log('search data', this.students);
  // }
  filterInput(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.students = this.data[0].filter((item: any) => {
      const yearLevelValue = item.student_yr_lvl;
      const yearLevelString = this.getYearLevelString(yearLevelValue);
      const matchesYearLevel =
        yearLevelString.toLowerCase().includes(filterValue) ||
        `${yearLevelValue} Trimester`.toLowerCase().includes(filterValue);

      const matchesOtherFields = Object.values(item).some((value) =>
        String(value).toLowerCase().includes(filterValue)
      );

      return matchesYearLevel || matchesOtherFields;
    });
    // console.log('search data', this.students);
  }

  filterData() {
    if (this.selectedFilters === null || this.selectedFilters.length === 0) {
      this.students = this.data[0];
    } else {
      this.students = this.data[0].filter(
        (item: { id: number; deptid: number }) =>
          this.selectedFilters.some((filter) => filter.id === item.deptid)
      );
      // console.log('dropdownSelect data', this.students);
    }
  }

  deleteSelectedStuds(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.selectedStudents.forEach((item) => {
          const studid = item.studid;
          this.AccountingController.deletestuds(studid).subscribe({
            next: (res) => {
              console.log(res);
              this.messageService.add({
                severity: 'info',
                summary: 'Confirmed',
                detail: 'Record deleted',
              });
            },
            error: (error: HttpErrorResponse) => {
              console.log(error.message);
            },
          });
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
    // console.log('Selected items to delete:', this.selectedStudents);
  }

  ngOnInit(): void {
    this.AccountingController.getstudents().subscribe((res) => {
      this.data = res;
      this.students = this.data[0];
      // console.log(this.students);
      this.filterData();
    });
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
