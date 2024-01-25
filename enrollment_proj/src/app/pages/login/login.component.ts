import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginController } from 'src/app/controllers/login_controller.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  studentdata: any;
  submitted = false;
  data: any;
  token: any;
  form: FormGroup = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    username: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private logincontroller: LoginController,
    private router: Router
  ) {}

  // loginForm() {
  //    form: FormGroup = this.formBuilder.group({
  //     username: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required]],
  //   });
  // }
  ngOnInit(): void {}

  submit() {
    this.submitted = true;

    if (this.form?.invalid) {
      return;
    }
    $('#loading').removeClass('d-none');
    $('#mainPage').addClass('d-none');

    this.logincontroller.login(this.form.value).subscribe((res) => {
      this.data = res;
      console.log(this.data);
      if (this.data.status === 1) {
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);
        this.logincontroller.reloaddata();
        $('#loading').addClass('d-none');
        $('#mainPage').removeClass('d-none');
        console.log(this.token);
        if (this.logincontroller.userdata.role === 'student') {
          this.router.navigate(['student-dashboard-home']);
        } else if (this.logincontroller.userdata.role === 'accounting') {
          this.router.navigate(['accounting-dashboard-home']);
        } else if (this.logincontroller.userdata.role === 'registrar') {
          this.router.navigate(['registrar-dashboard-home']);
        } else if (this.logincontroller.userdata.role === 'dean') {
          this.router.navigate(['deans-home']);
        }
      } else if (this.data.status === 0) {
        Swal.fire('Error', this.data.message, 'error');
        $('#loading').addClass('d-none');
        $('#mainPage').removeClass('d-none');
      }
    });
    console.log(this.form.value);
  }
}
