import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as $ from 'jquery';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-applicants',
  templateUrl: './student-applicants.component.html',
  styleUrls: ['./student-applicants.component.css'],
})
export class StudentApplicantsComponent implements OnInit, AfterViewInit {
  readonly Root_URL = 'http://127.0.0.1:8000/api/';

  students: any = [];
  info: any = [];
  total: any;
  data: any;
  totalPage: any;
  currentStudents: any;
  id: any;
  getInfo: any;
  approvalinfo: any;
  idget: any = {};

  filterObj = {
    name: '',
    sort: 'asc',
    perPage: 10,
    page: 1,
  };
  viewstudinfos: boolean = false;
  displayname: any;
  studinfos: any;
  studata: any;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private collegecontroller: CollegeEnrollmentController
  ) {}

  ngOnInit(): void {
    this.filterEnrolled();
  }

  showDialogStud(
    id: number,
    lastname: string,
    firstname: string,
    middlename: string
  ) {
    this.viewstudinfos = true;
    // alert(id);
    this.displayname = lastname + ', ' + firstname + ' ' + middlename;
    this.getstudentsinfo(id);
  }

  getstudentsinfo(id: number) {
    this.collegecontroller.showstudinfo(id).subscribe({
      next: (res) => {
        this.studata = res;
        this.studinfos = this.studata[0];
        console.log(this.studinfos);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  onPrevious() {
    if (this.filterObj.page > 1) {
      this.filterObj.page--;
      this.filterEnrolled();
    }
  }

  onNext() {
    if (this.filterObj.page < this.totalPage) {
      this.filterObj.page++;
      this.filterEnrolled();
    }
  }

  filterEnrolled() {
    this.http
      .post(this.Root_URL + 'approval-students', this.filterObj)
      .subscribe((enrolled_students) => {
        this.data = enrolled_students;
        this.students = this.data.data;
        this.total = this.data.total;
        this.totalPage = this.data.lastPage;
        console.log(this.students);
      });
  }

  ngAfterViewInit(): void {}

  generatePageNumbers(): number[] {
    const totalVisiblePages = 10;
    const totalPages = this.totalPage;
    const currentPage = this.filterObj.page;

    if (totalPages <= totalVisiblePages) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      const halfVisiblePages = Math.floor(totalVisiblePages / 2);
      const startPage =
        currentPage > halfVisiblePages
          ? Math.max(currentPage - halfVisiblePages, 1)
          : 1;
      const endPage = Math.min(startPage + totalVisiblePages - 1, totalPages);

      return Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      );
    }
  }

  goToPage(pageNum: number): void {
    if (
      pageNum >= 1 &&
      pageNum <= this.totalPage &&
      pageNum !== this.filterObj.page
    ) {
      this.filterObj.page = pageNum;
      this.filterEnrolled();
    }
  }

  onSearchInputChange() {
    this.filterObj.page = 1;
    this.filterEnrolled();
  }

  studentInfo(studentId: string): void {
    this.idget.id = studentId;

    const idone = {
      id: studentId,
    };

    this.http
      .post(this.Root_URL + 'info-student', idone)
      .subscribe((information) => {
        this.data = information;
        this.info = this.data[0];
        // console.log(this.info);
        // console.log(idone);
      });
  }

  approvestudent(acadid: string) {
    this.collegecontroller.registrarapproval(acadid).subscribe((res) => {
      this.approvalinfo = res;
      if (this.approvalinfo['message'] === 'success') {
        Swal.fire('Success', 'Student Approved', 'success').then(() =>
          window.location.reload()
        );
      } else {
        Swal.fire('ERROR', 'Please Try Again', 'error');
      }
    });
  }
}
