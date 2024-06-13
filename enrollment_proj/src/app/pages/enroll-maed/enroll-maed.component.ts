import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enroll-maed',
  templateUrl: './enroll-maed.component.html',
  styleUrls: ['./enroll-maed.component.css']
})
export class EnrollMaedComponent implements OnInit {
  data: any;
  acadYear: any;
  academicYear: string = '';
  selectedmaed_academicYear = false;
  selectedyearLvl: string = '';
  selectedmaed_yearLvl = false;
  selectedSemester: string = '';
  selectedmaed_Semester = false;
  selectedCourse: string = '';
  selectedmaed_Course = false;
  selectedStudentStatus: string = '';
  selectedmaed_StudentStatus = false;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onChange(event: Event) {
    // Your change event handler logic here
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedmaed_academicYear = !selectedValue;
    this.academicYear = selectedValue;
    // alert(selectedValue);
  }

  maedYrLevel(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedmaed_yearLvl = !selectedValue;
    this.selectedyearLvl = selectedValue;
  }

  maedSemester(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedmaed_Semester = !selectedValue;
    this.selectedSemester = selectedValue;
  }

  maedCourse(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedmaed_Course = !selectedValue;
    this.selectedCourse = selectedValue;
  }

  maedStudentStatus(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedmaed_StudentStatus = !selectedValue;
    this.selectedStudentStatus = selectedValue;
  }


  currentPage: number = 1;
  totalPages: number = 4;


  onPageChanged(page: number) {
    if (!this.academicYear ||
      !this.selectedyearLvl ||
      !this.selectedSemester ||
      !this.selectedCourse ||
      !this.selectedStudentStatus
    ) {
      this.selectedmaed_academicYear = !this.academicYear;
      this.selectedmaed_yearLvl = !this.selectedyearLvl;
      this.selectedmaed_Semester = !this.selectedSemester;
      this.selectedmaed_Course = !this.selectedCourse;
      this.selectedmaed_StudentStatus = !this.selectedStudentStatus

      Swal.fire(
        'ERROR',
        'All input must be required',
        'error'
      )
    } else {
      page;
      // alert(page);
      if (page === 2) {
        this.router.navigate(['/enroll-maed-student-information']);
      }
      if (page === 3) {
        this.router.navigate(['/enroll-maed-education-record']);
      }
    }
  }



}

