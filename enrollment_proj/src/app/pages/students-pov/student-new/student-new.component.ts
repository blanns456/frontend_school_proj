import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import nationalities from '../../../../assets/json/nationalities.json';
import religions from '../../../../assets/json/religions.json';
import * as $ from 'jquery';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TrimesterService } from 'src/app/services/trimester.service';
import { ProgramService } from 'src/app/services/program.service';
import { OtpService } from 'src/app/services/otp.service';
import { CollegeService } from 'src/app/services/college.service';

interface VerifyOTPResponse {
  message?: string;
  error?: string;
}

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
  trimester: any;

  gender = [
    { name: 'Male', value: 'Male' },
    { name: 'Female', value: 'Female' },
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
    { name: 'Transferee', value: 'Transferee' },
  ];

  constructor(
    private messageService: MessageService,
    private router: Router,
    private enrollment: TrimesterService,
    private program: ProgramService,
    private otPassword: OtpService,
    private college: CollegeService
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
      birth_date: new FormControl(null, [Validators.required]),
      birth_place: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      contact_number: new FormControl(null, [Validators.required]),
      citizenship: new FormControl(null, [Validators.required]),
      religion: new FormControl(null, [Validators.required]),
      enrolled_in: new FormControl('College', [Validators.required]),
      program: new FormControl(null, [Validators.required]),
      trimester: new FormControl(null, [Validators.required]),
      year_level: new FormControl(null, [Validators.required]),
      student_status: new FormControl(null, [Validators.required]),
    });
  }

  enrollmentActive() {
    this.enrollment.enrollment().subscribe({
      next: (res) => {
        this.data = res;
        this.enrollmentData = this.data;
        this.signUpForm.patchValue({ trimester: this.enrollmentData.id });
      },
      error: () => {},
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

    this.otPassword.send_otp(this.signUpForm.value).subscribe({
      next: () => {
        this.loadbar = false;
        this.otp = true;
      },
      error: (error: HttpErrorResponse) => {
        if (error.error.errors.email) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.errors.email[0],
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
        this.loadbar = false;
      },
    });
  }

  verifyOTP() {
    this.otPassword.verifyotp({ otp: this.enteredOTP || '' }).subscribe({
      next: (response: VerifyOTPResponse) => {
        if (response.message === 'OTP verified successfully') {
          this.loading = true;
          this.college.createStudent(this.signUpForm.value).subscribe({
            next: (res) => {
              this.info = res;
              Swal.fire(
                'SUCCESS',
                'Check Email For Account Information',
                'success'
              );
              this.router.navigate(['login']);
              this.loading = false;
            },
            error: () => {
              this.loading = false;
            },
          });
        }
      },
      error: (error: HttpErrorResponse) => {
        if (error.error.error === 'OTP expired') {
          Swal.fire({
            title: 'Code Expired',
            text: 'Tap to resend again.',
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Resend Code',
          }).then((result) => {
            if (result.isConfirmed) {
              this.otPassword.send_otp(this.signUpForm.value).subscribe({
                next: (res) => {
                  this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'A new code has been sent to your email.',
                  });
                },
                error: (error: HttpErrorResponse) => {
                  if (
                    error.error.message ===
                    'OTP already sent. Please wait for it to expire before requesting a new one.'
                  ) {
                    this.messageService.add({
                      severity: 'error',
                      summary: 'Error',
                      detail:
                        'OTP already sent. Please wait for it to expire before requesting a new one.',
                    });
                  } else {
                    this.messageService.add({
                      severity: 'error',
                      summary: 'Error',
                      detail:
                        'Failed to resend the OTP. Please try again later.',
                    });
                  }
                },
              });
              this.enteredOTP = '';
            }
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Invalid OTP Code',
          });
          this.otp = true;
          this.enteredOTP = '';
        }
      },
    });
  }

  loadPrograms() {
    this.program.getPrograms().subscribe((res) => {
      this.data = res;
      this.courses = this.data[0];
    });
  }

  ngOnInit(): void {
    this.nationalitiesList = nationalities;
    this.religionList = religions;
    this.loadPrograms();
    this.enrollmentActive();
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
