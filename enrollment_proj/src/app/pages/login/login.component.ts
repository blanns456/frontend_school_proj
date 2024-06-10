import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  role: any;

  form: FormGroup = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    username: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private logincontroller: LoginController,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token) {
          if (role === 'college') {
          this.router.navigate(['student/home']);
        } else if (role === 'dean') {
          this.router.navigate(['dean/home']);
        } else if (role === 'Graduate Studies') {
          this.router.navigate(['maed']);
        } else if (role === 'teller') {
          this.router.navigate(['accounting']);
        } else if (role === 'registrar') {
          this.router.navigate(['registrar']);
        }
    }
  }

  submit() {
    this.logincontroller.login(this.form.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        this.role = localStorage.getItem('role');

<<<<<<< Updated upstream
        if (this.role === 'College') {
=======
        if (this.role === 'college' || this.role === 'Graduate Studies') {
>>>>>>> Stashed changes
          this.router.navigate(['student/home']);
        } else if (this.role === 'dean') {
          this.router.navigate(['dean/home']);
        } else if (this.role === 'Graduate Studies') {
          this.router.navigate(['maed/home']);
        } else if (this.role === 'teller') {
          this.router.navigate(['accounting/home']);
        } else if (this.role === 'registrar') {
          this.router.navigate(['registrar/home']);
        }
        // else if (this.role === 'Graduate Studies') {
        //   this.router.navigate(['maed']);
        // }
      },
      error: (error: any) => {
        console.log(error);
        if (error.error && error.error.error) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.error
          });
        } else if (error.error.errors.username) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.errors.username[0]
          });
        } else if (error.error.errors.password) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.errors.password[0]
          });
        }
      }
    });
  }

}
