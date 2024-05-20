import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error } from 'jquery';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AccountingController } from 'src/app/controllers/accountingController.component';
import { ProspectusController } from 'src/app/controllers/prospectus_controller.component';

@Component({
  selector: 'app-accounting-dashboard-labfees',
  templateUrl: './accounting-dashboard-labfees.component.html',
  styleUrls: ['./accounting-dashboard-labfees.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class AccountingDashboardLabfeesComponent implements OnInit {
  data: any;
  departments: any;
  deptinfo: any;
  deptsubjects: any;
  departname: any;
  deptdialog: boolean = false;
  coursesDeptDialog: boolean = false;
  getcourses: any;
  courses: any;
  info: any;
  coursename!: string;
  labinfo: any;
  labfeesdb: any;
  idcourse: any;
  addlabfees: FormGroup;

  constructor(
    private AccountingController: AccountingController,
    private prospectusController: ProspectusController,
    private messageService: MessageService
  ) {
    this.addlabfees = new FormGroup({
      subjectid: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    });
  }

  savelabfees() {
    // console.log(this.addlabfees.value);
    this.AccountingController.addlabfee(this.addlabfees.value).subscribe({
      next: (res) => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: 'Successfully Added',
          detail: 'Added Lab Fees',
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  filterInput(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.deptsubjects = this.deptinfo[0].filter(
      (item: { [s: string]: unknown } | ArrayLike<unknown>) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(filterValue)
        )
    );
    console.log('search data', this.deptsubjects);
  }

  showDept(id: number, department_name: string) {
    this.deptdialog = true;
    this.departname = department_name;
    this.getcoursesedept(id);
  }

  addShowdialog(courses_id: number, name: string) {
    // console.log(courses_id);
    this.coursename = name;
    this.coursesDeptDialog = true;
    this.getdeptsubject(courses_id);
  }

  getid(courses_id: number) {
    // alert(courses_id);
    this.getlabfeesdb(courses_id);
  }

  getlabfeesdb(courses_id: number) {
    this.AccountingController.getlabfeesdb(courses_id).subscribe({
      next: (res) => {
        this.labinfo = res;
        this.labfeesdb = this.labinfo[0];
        // console.log(this.labfeesdb);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getdeptsubject(id: number) {
    this.AccountingController.getdeptsubject(id).subscribe({
      next: (res) => {
        this.deptinfo = res;
        this.deptsubjects = this.deptinfo[0];
        // console.log(this.deptsubjects);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getdepartments() {
    this.AccountingController.getdepartments().subscribe({
      next: (res) => {
        this.data = res;
        this.departments = this.data[0];
        // console.log(this.departments);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  getcoursesedept(id: number) {
    this.AccountingController.getcourses(id).subscribe({
      next: (res) => {
        this.info = res;
        this.getcourses = this.info[0];
        // console.log(this.getcourses);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getdepartments();
    // this.getlabfeesdb();
  }
}
