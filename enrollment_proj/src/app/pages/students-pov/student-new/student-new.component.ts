import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CollegeEnrollmentController } from 'src/app/controllers/colleger_enrollment_controller.component';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css'],
})
export class StudentNewComponent {
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

  constructor(private collegecontroller: CollegeEnrollmentController) {
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
    console.log(this.signUpForm.value);
    this.collegecontroller
      .createstudent(this.signUpForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
