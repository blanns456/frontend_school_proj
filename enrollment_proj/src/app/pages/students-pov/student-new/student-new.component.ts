import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import { SemesterController } from 'src/app/controllers/semester_controller.component';
import Swal from 'sweetalert2';
import nationalities from '../../../../assets/json/nationalities.json';
import religions from '../../../../assets/json/religions.json';
import * as $ from 'jquery';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TrimesterService } from 'src/app/services/trimester.service';


@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css'],
  providers: [MessageService],
})
export class StudentNewComponent implements OnInit {
  nationalitiesList: string[] = [];
  religionList: string[] = [];
  info: any;
  changetype: boolean = true;
  changetype1: boolean = true;
  signUpForm: FormGroup;
  signuploading: boolean = false;
  numberVal: string | undefined;
  lastnameControl: any;
  data: any;
  courses: any;
  semesterinfo: any;
  semester: any;
  sem: any;
  activateyr: any | string;
  noMiddleName = false;
  otp: boolean = false;
  pipe: any;
  loading: boolean = false;
  loadbar: boolean = false;
  enteredOTP: string | undefined;
  enrollmentData: any;

  gender = [
    { name: 'Male', value: 'male' },
    { name: 'Female', value: 'female' },
  ];

  civilstatus = [
    { name: 'Single', value: 'single' },
    { name: 'Married', value: 'married' },
    { name: 'Widowed', value: 'widowed' },
    { name: 'Divorced', value: 'divorced' },
  ];

  yearlvl = [
    { name: '1st Year', value: '1' },
    { name: '2nd Year', value: '2' },
    { name: '3rd Year', value: '3' },
    { name: '4th Year', value: '4' },
  ];

  studstatus = [
    { name: 'New Student', value: 'New Student' },
    { name: 'Continuing', value: 'Continuing' },
    { name: 'Transferee', value: 'Transferee' },
  ];

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private collegecontroller: CollegeEnrollmentController,
    private semester_controller: SemesterController,
    private router: Router,
    private enrollment: TrimesterService
  ) {
    this.pipe = new DatePipe('en-PH');
    this.sem = new FormControl();
    this.signUpForm = new FormGroup({
      last_name: new FormControl(null, [Validators.required]),
      first_name: new FormControl(null, [Validators.required]),
      middle_name: new FormControl(
        {
          value: this.noMiddleName ? 'N/A' : null,
          disabled: this.noMiddleName,
        },
        Validators.required
      ),
      suffix: new FormControl(null),
      gender: new FormControl(null, [Validators.required]),
      civil_status: new FormControl(null, [Validators.required]),
      birthdate: new FormControl(null, [Validators.required]),
      birth_place: new FormControl(null, [Validators.required]),
      email_address: new FormControl(null, [Validators.required]),
      contact_number: new FormControl(null, [Validators.required]),
      citizenship: new FormControl(null, [Validators.required]),
      religion: new FormControl(null, [Validators.required]),
      enrollIn: new FormControl('College', [Validators.required]),
      program: new FormControl(null, [Validators.required]),
      semester: this.sem,
      student_yr_level: new FormControl(null, [Validators.required]),
      student_status: new FormControl(null, [Validators.required]),
    });
  }

  toggleMiddleName() {
    this.noMiddleName = !this.noMiddleName;
    const middleNameControl = this.signUpForm.get('middle_name');
    if (this.noMiddleName) {
      middleNameControl?.setValue('N/A');
      middleNameControl?.disable();
    } else {
      middleNameControl?.setValue(null);
      middleNameControl?.enable();
    }
  }

  signUp() {
    this.loadbar = true;
    console.log(this.signUpForm.value);
    this.collegecontroller.sentotp(this.signUpForm.value).subscribe({
      next: () => {
        this.loadbar = false;
        this.otp = true;
      },
      error: (error: HttpErrorResponse) => {
        if (error.error.errors.email_address) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.errors.email_address[0],
          });
        } else if (error.error.errors.contact_number) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.errors.contact_number[0],
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.errors.message,
          });
        }
        console.log(error);
        // this.loadbar = false;
      },
    });
  }

  verifyOTP() {
    this.collegecontroller.verifyotp({ otp: this.enteredOTP || '' }).subscribe({
      next: (response) => {
        this.info = response;
        const d = Date();
        const myFormattedDate = this.pipe.transform(d, 'Y-MM-dd HH:mm:ss');
        if (this.info[0][0]['expire'] <= myFormattedDate) {
          Swal.fire({
            title: 'Code Expired',
            text: 'Tap to resend again.',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Resend Code',
          }).then((result) => {
            if (result.isConfirmed) {
              this.collegecontroller
                .sentotp(this.signUpForm.value)
                .subscribe((res) => {
                });
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'A new code has been sent to your email.',
              });
            }
            this.enteredOTP = '';
          });
        } else {
          this.loading = true;
          this.collegecontroller
            .createstudent(this.signUpForm.value)
            .subscribe({
              next: (res) => {
                this.info = res;
                if (this.info[0] && this.info[0]['message'] === 'Success') {
                  Swal.fire(
                    'SUCCESS',
                    'Check Email For Account Information',
                    'success'
                  );
                  this.router.navigate(['login']);
                  this.loading = false;
                }
              },
              error: () => {
              },
            });
        }
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Invalid OTP Code',
          detail: error.statusText,
        });
        this.otp = true;
        this.enteredOTP = '';
      },
    });
  }

  loadcourses() {
    this.collegecontroller.getcourses().subscribe((res) => {
      this.data = res;
      this.courses = this.data[0];
    });
  }

  ngOnInit(): void {
    this.nationalitiesList = nationalities;
    this.religionList = religions;
    this.loadcourses();

    this.enrollment.enrollment().subscribe({
      next: (res) => {
        this.data = res;
        this.enrollmentData = this.data;
      }, error: (err) => {
        // setTimeout(() => {
        //   this.messageService.add({
        //     severity: 'error',
        //     summary: 'Notice',
        //     detail: 'Enrollment is no longer available!',
        //   });
        // }, 1000);
        // this.router.navigate(['home']);
      }
    });

    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.semesterinfo = res;
      if (this.semesterinfo[0]) {
        this.semester = this.semesterinfo[0][0]['semester'];
        this.sem.setValue(this.semester);
      }
    });
  }

  inputMask(event: Event) {
    var numberValue = (event.target as HTMLSelectElement).value;

    var numericRegex = /^[0-9]+$/;

    if (!numericRegex.test(numberValue)) {
      var sanitizedValue = numberValue.replace(/[^0-9]/g, '');

      (event.target as HTMLSelectElement).value = sanitizedValue;

    }
  }
}
