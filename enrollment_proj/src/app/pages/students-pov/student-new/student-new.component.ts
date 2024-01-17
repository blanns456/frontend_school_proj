import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent {

  visible: boolean = true;
  changetype: boolean = true;
  visible1: boolean = true;
  changetype1: boolean = true;
  signUpForm: FormGroup;

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  viewpass1() {
    this.visible1 = !this.visible1;
    this.changetype1 = !this.changetype1;
  }

  constructor() {
    this.signUpForm = new FormGroup({
      last_name: new FormControl(null, [Validators.required]),
      first_name: new FormControl(null, [Validators.required]),
      middle_name: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      civil_status: new FormControl(null, [Validators.required]),
      birth_date: new FormControl(null, [Validators.required]),
      birth_place: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      citizenship: new FormControl(null, [Validators.required]),
      religion: new FormControl(null, [Validators.required]),
    })
  }

  signUp() {
    console.log(this.signUpForm.value);


  }

}
