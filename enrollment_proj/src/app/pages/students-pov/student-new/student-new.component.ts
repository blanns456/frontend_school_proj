import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css'],
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
  enteredOTP: string[] = new Array(6).fill('');
  pipe: any;
  loading: boolean = false;
  visible: any;
  visible1: any;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  viewpass1() {
    this.visible1 = !this.visible1;
    this.changetype1 = !this.changetype1;
  }

  handleInput(value: string, index: number): void {
    if (value.length > 1) {
      this.enteredOTP[index] = value.slice(-1);
    } else {
      this.enteredOTP[index] = value;
    }

    if (value && index < this.enteredOTP.length - 1) {
      this.focusNextInput(index);
    }
  }

  handleKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && this.enteredOTP[index] === '') {
      this.focusPrevInput(index);
    }
  }

  focusNextInput(index: number): void {
    const nextInput = document.querySelectorAll('input')[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }

  focusPrevInput(index: number): void {
    const prevInput = document.querySelectorAll('input')[index - 1];
    if (prevInput) {
      prevInput.focus();
    }
  }

  constructor(
    private http: HttpClient,
    private collegecontroller: CollegeEnrollmentController,
    private semester_controller: SemesterController,
    private router: Router,
  ) {
    this.pipe = new DatePipe('en-PH');
    this.sem = new FormControl();
    this.signUpForm = new FormGroup({
      lastname: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null, [Validators.required]),
      middleName: new FormControl({ value: this.noMiddleName ? 'N/A' : null, disabled: this.noMiddleName }, Validators.required),
      suffix: new FormControl(null),
      gender: new FormControl(null, [Validators.required]),
      civil_status: new FormControl(null, [Validators.required]),
      birthdate: new FormControl(null, [Validators.required]),
      birth_place: new FormControl(null, [Validators.required]),
      email_address: new FormControl(null, [Validators.required]),
      contact_number: new FormControl(null, [Validators.required]),
      citizenship: new FormControl(null, [Validators.required]),
      religion: new FormControl(null, [Validators.required]),
      enrollIn: new FormControl(null, [Validators.required]),
      program: new FormControl(null, [Validators.required]),
      semester: this.sem,
      student_yr_level: new FormControl(null, [Validators.required]),
      student_status: new FormControl(null, [Validators.required]),
    });
  }

  toggleMiddleName() {
    this.noMiddleName = !this.noMiddleName;
    const middleNameControl = this.signUpForm.get('middleName');
    if (this.noMiddleName) {
      middleNameControl?.setValue('N/A');
      middleNameControl?.disable();
    } else {
      middleNameControl?.setValue(null);
      middleNameControl?.enable();
    }
  }

  signUp() {
    console.log(this.signUpForm.value);

    this.collegecontroller.sentotp(this.signUpForm.value).subscribe((res) => {
      console.log(res);
    });

    this.otp = true;
  }

  verifyOTP() {
    const enteredOTP = this.enteredOTP.join('');
    // console.log(enteredOTP);

    this.collegecontroller.verifyotp({ otp: enteredOTP }).subscribe({
      next: (response) => {
        this.info = response;
        // console.log('OTP verified successfully');
        const d = Date();
        const myFormattedDate = this.pipe.transform(d, 'Y-MM-dd HH:mm:ss');

        if (this.info[0][0]['expire'] <= myFormattedDate) {
          console.log('expire na');
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
                  console.log('Resent Success', res);
                });
              Swal.fire({
                title: 'Code Resent!',
                text: 'A new code has been sent to your email.',
                icon: 'success',
              });
            }
            this.enteredOTP = [];
          });
        } else {
          console.log('di pa expire');
          this.loading = true;
          this.collegecontroller
            .createstudent(this.signUpForm.value)
            .subscribe((res) => {
              this.info = res;
              // console.log(res);
              if (this.info[0]['message'] == 'Success') {
                setTimeout(() => {
                  Swal.fire({
                    title: 'Success',
                    text: 'Created Successfully, Please Check your Email',
                    icon: 'success',
                  });
                  this.router.navigate(['login']);
                }, 7000);
                // this.router.navigate(['login']);
              } else if (this.info[0]['message'] == 'ERROR') {
                if (this.info[0]['error']['contact_number']) {
                  Swal.fire(
                    'ERROR',
                    this.info[0]['error']['contact_number'][0],
                    'error'
                  );
                } else if (this.info[0]['error']['email_address']) {
                  Swal.fire(
                    'ERROR',
                    this.info[0]['error']['email_address'][0],
                    'error'
                  );
                }
                this.router.navigate(['new/student']);
              } else {
                Swal.fire(
                  'ERROR',
                  'Try again later, Please Contact Chat Support',
                  'error'
                );
              }
              // console.log(this.signUpForm.value);
              // console.log(res);
            });
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
        Swal.fire({
          title: 'Invalid OTP',
          icon: 'error',
        });
        this.otp = true;
        this.enteredOTP = [];
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
    // console.log(this.religionList);
    this.loadcourses();

    this.semester_controller.getactivenrollsem().subscribe((res) => {
      this.semesterinfo = res;
      if (this.semesterinfo[0]) {
        this.semester = this.semesterinfo[0][0]['semester'];
        this.activateyr = this.semesterinfo[0][0]['active_year'];
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

      console.log('Invalid input. Please enter only numeric values.');
    }
  }
}
