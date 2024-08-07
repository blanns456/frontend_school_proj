import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword, StrongPasswordRegx } from './match-password.validator';
import { SignupController } from 'src/app/controllers/signup_controller.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-accounting',
  templateUrl: './signup-accounting.component.html',
  styleUrls: ['./signup-accounting.component.css'],
})
export class SignupAccountingComponent {
  visible: boolean = true;
  changetype: boolean = true;
  info: any;
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

  constructor(private usercontroller: SignupController) {
    this.signUpForm = new FormGroup(
      {
        first_name: new FormControl(null, [Validators.required]),
        last_name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        role: new FormControl('accounting', [Validators.required]),
        number: new FormControl(null, [Validators.required]),
        birth_date: new FormControl(null, [Validators.required]),
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [
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
    this.usercontroller
      .createstaffaccounting(this.signUpForm.value)
      .subscribe((res) => {
        this.info = res;
        if (this.info[0]['message'] === 'ERROR') {
          if (this.info[0]['error']['email']) {
            Swal.fire('Error', this.info[0]['error']['email'][0], 'error');
          } else if (this.info[0]['error']['number']) {
            Swal.fire('Error', this.info[0]['error']['number'][0], 'error');
          } else if (this.info[0]['error']['username']) {
            Swal.fire('Error', this.info[0]['error']['username'][0], 'error');
          }
          return;
        } else {
          // this.loadusers();
          Swal.fire('Success', 'Added Successfully', 'success').then((e) => {
            window.location.reload();
          });
          return;
        }
      });
  }
}
