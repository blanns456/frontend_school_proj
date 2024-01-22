import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css'],
})
export class StudentNewComponent {
  info: any;
  visible: boolean = true;
  changetype: boolean = true;
  visible1: boolean = true;
  changetype1: boolean = true;
  signUpForm: FormGroup;
  signuploading: boolean = false;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  viewpass1() {
    this.visible1 = !this.visible1;
    this.changetype1 = !this.changetype1;
  }

  constructor(
    private collegecontroller: CollegeEnrollmentController,
    private router: Router
  ) {
    this.signUpForm = new FormGroup({
      lastname: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null, [Validators.required]),
      middlename: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      civil_status: new FormControl(null, [Validators.required]),
      birthdate: new FormControl(null, [Validators.required]),
      birth_place: new FormControl(null, [Validators.required]),
      email_address: new FormControl(null, [Validators.required]),
      contact_number: new FormControl(null, [Validators.required]),
      citizenship: new FormControl(null, [Validators.required]),
      religion: new FormControl(null, [Validators.required]),
    });
  }

  signUp() {
    // console.log(this.signUpForm.value);
    this.collegecontroller
      .createstudent(this.signUpForm.value)
      .subscribe((res) => {
        this.info = res;
        // console.log(res);
        if (this.info[0]['message'] == 'Success') {
          Swal.fire(
            'Success',
            'Created Successfully, Please Check your Email',
            'success'
          );
          this.router.navigate(['login']);
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
        } else {
          Swal.fire(
            'ERROR',
            'Try again later, Please Contact Chat Support',
            'error'
          );
        }

        // console.log(res);
      });
  }
}
