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

  ngOnInit(): void { }

  submit() {
    this.logincontroller.login(this.form.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['student-dashboard-home']);
      },
      error: (error: any) => {
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
