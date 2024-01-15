import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword, StrongPasswordRegx } from './match-password.validator';

@Component({
  selector: 'app-signup-dean',
  templateUrl: './signup-dean.component.html',
  styleUrls: ['./signup-dean.component.css']
})
export class SignupDeanComponent {
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
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      birth_date: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.pattern(StrongPasswordRegx), Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required]),
    },
    {
      validators: matchpassword
    })
  }

  signUp() {
    console.log(this.signUpForm.value);
  }
}
