import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword, StrongPasswordRegx } from './match-password.validator';

@Component({
  selector: 'app-signup-accounting',
  templateUrl: './signup-accounting.component.html',
  styleUrls: ['./signup-accounting.component.css'],
})
export class SignupAccountingComponent {
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
    this.signUpForm = new FormGroup(
      {
        first_name: new FormControl('', [Validators.required]),
        last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        number: new FormControl('', [Validators.required]),
        role: new FormControl('accounting', [Validators.required]),
        birth_date: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(StrongPasswordRegx),
        ]),
        confirm_password: new FormControl(null),
      },
      {
        validators: matchpassword,
      }
    );
  }

  signUp() {
    console.log(this.signUpForm.value);
  }
}
