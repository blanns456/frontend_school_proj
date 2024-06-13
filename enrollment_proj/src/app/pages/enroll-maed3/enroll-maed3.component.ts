import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-enroll-maed3',
  templateUrl: './enroll-maed3.component.html',
  styleUrls: ['./enroll-maed3.component.css']
})
export class EnrollMaed3Component implements OnInit {
  data: any;
  elem_yrval: string = '';
  elem_yrisEmpty = false;
  jrhigh_yrval: string = '';
  jrhigh_yrisEmpty = false;
  shs_yrval: string = '';
  shs_yrisEmpty = false;
  elem_yearGradval: string = '';
  elem_yearGradisEmpty = false;
  jhshigh_yearGradval: string = '';
  jhshigh_yearGradisEmpty = false;
  shs_yearGradval: string = '';
  shs_yearGradisEmpty = false;
  parentVal: string = '';
  parentValisEmpty = false;
  occupationVal: string = '';
  occupationValisEmpty = false;
  contactNumVal: string = '';
  contactNumValisEmpty = false;
  lastSchoolAttendVal: string = '';
  lastSchoolAttendValisEmpty = false;
  lastSchool_yearAttendVal: string = '';
  lastSchool_yearAttendValisEmpty = false;


  ngOnInit(): void {

  }

  constructor(
    private router: Router
  ) { }


  elem_yr(event: Event) {
    const elemYearValue = (event.target as HTMLSelectElement).value;
    this.elem_yrisEmpty = elemYearValue === '';
    this.elem_yrval = elemYearValue;
  }

  jrhigh_yr(event: Event) {
    const jhsYearValue = (event.target as HTMLSelectElement).value;
    this.jrhigh_yrisEmpty = jhsYearValue === '';
    this.jrhigh_yrval = jhsYearValue;
  }

  shs_yr(event: Event) {
    const shsYearValue = (event.target as HTMLSelectElement).value;
    this.shs_yrisEmpty = shsYearValue === '';
    this.shs_yrval = shsYearValue;
  }

  elem_yearGrad(event: Event) {
    const elemYearGradValue = (event.target as HTMLSelectElement).value;
    this.elem_yearGradisEmpty = elemYearGradValue === '';
    this.elem_yearGradval = elemYearGradValue;
  }

  jhshigh_yearGrad(event: Event) {
    const jhshigh_yearGradValue = (event.target as HTMLSelectElement).value;
    this.jhshigh_yearGradisEmpty = jhshigh_yearGradValue === '';
    this.jhshigh_yearGradval = jhshigh_yearGradValue;
  }

  shs_yearGrad(event: Event) {
    const shs_yearGradValue = (event.target as HTMLSelectElement).value;
    this.shs_yearGradisEmpty = shs_yearGradValue === '';
    this.shs_yearGradval = shs_yearGradValue;
  }

  parentsVal(event: Event) {
    const parentValue = (event.target as HTMLSelectElement).value;
    this.parentValisEmpty = parentValue === '';
    this.parentVal = parentValue;
  }

  occupation(event: Event) {
    const occupationValue = (event.target as HTMLSelectElement).value;
    this.occupationValisEmpty = occupationValue === '';
    this.occupationVal = occupationValue;
  }

  contactNumVals(event: Event) {
    const contactNumValules = (event.target as HTMLSelectElement).value;
    this.contactNumValisEmpty = contactNumValules === '';
    this.contactNumVal = contactNumValules;
  }

  lastSchoolAttendVals(event: Event) {
    const lastSchoolAttendValue = (event.target as HTMLSelectElement).value;
    this.lastSchoolAttendValisEmpty = lastSchoolAttendValue === '';
    this.lastSchoolAttendVal = lastSchoolAttendValue;
  }

  lastSchool_yearAttendVals(event: Event) {
    const lastSchool_yearAttendValue = (event.target as HTMLSelectElement).value;
    this.lastSchool_yearAttendValisEmpty = lastSchool_yearAttendValue === '';
    this.lastSchool_yearAttendVal = lastSchool_yearAttendValue;
  }


  currentPage: number = 3;
  totalPages: number = 4;

  onPageChanged(page: number) {
    if (page > this.currentPage) {
      if (!this.elem_yrval ||
        !this.jrhigh_yrval ||
        !this.shs_yrval ||
        !this.elem_yearGradval ||
        !this.jhshigh_yearGradval ||
        !this.shs_yearGradval ||
        !this.parentVal ||
        !this.occupationVal ||
        !this.contactNumVal ||
        !this.lastSchoolAttendVal ||
        !this.lastSchool_yearAttendVal
      ) {
        this.elem_yrisEmpty = !this.elem_yrval;
        this.jrhigh_yrisEmpty = !this.jrhigh_yrval;
        this.shs_yrisEmpty = !this.shs_yrval;
        this.elem_yearGradisEmpty = !this.elem_yearGradval;
        this.jhshigh_yearGradisEmpty = !this.jhshigh_yearGradval;
        this.shs_yearGradisEmpty = !this.shs_yearGradval;
        this.parentValisEmpty = !this.parentVal;
        this.occupationValisEmpty = !this.occupationVal;
        this.contactNumValisEmpty = !this.contactNumVal;
        this.lastSchoolAttendValisEmpty = !this.lastSchoolAttendVal;
        this.lastSchool_yearAttendValisEmpty = !this.lastSchool_yearAttendVal;

        Swal.fire(
          'ERROR',
          'All input must be required',
          'error'
        )
      } else {
        page;
        if (page === 1) {
          this.router.navigate(['/enroll-maed']);
        }
        if (page === 2) {
          this.router.navigate(['/enroll-maed-student-information']);
        }
      }
    } else {
      page;
      if (page === 1) {
        this.router.navigate(['/enroll-maed']);
      }
      if (page === 2) {
        this.router.navigate(['/enroll-maed-student-information']);
      }
    }
  }

}
