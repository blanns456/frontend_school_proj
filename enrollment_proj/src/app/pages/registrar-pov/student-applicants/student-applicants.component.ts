import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-student-applicants',
  templateUrl: './student-applicants.component.html',
  styleUrls: ['./student-applicants.component.css'],
})
export class StudentApplicantsComponent implements OnInit, AfterViewInit {
  readonly Root_URL = 'http://local.genesys.com/api/';

  students: any = [];
  info: any = [];
  total: any;
  data: any;
  totalPage: any;
  currentStudents: any;
  id: any;
  getInfo: any;
  idget: any = {};

  filterObj = {
    name: '',
    sort: 'asc',
    perPage: 10,
    page: 1,
  };

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filterEnrolled();
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
        // console.log(this.data.page);
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
}
