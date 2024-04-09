import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginController } from 'src/app/controllers/login_controller.component';
import { MessageService } from 'primeng/api';
import { error } from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StrongPasswordRegx, matchpassword } from './match-password.validator';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-reset-password',
  templateUrl: './student-reset-password.component.html',
  styleUrls: ['./student-reset-password.component.css'],
  providers: [MessageService],
})
export class StudentResetPasswordComponent {
  info: any;
  pipe: any;
  reset: boolean = false;
  showForm3: boolean = false;
  loadingbtn: boolean = false;
  loadbar: boolean = false;
  loading: boolean = false;
  email: any;
  cpassword: any;
  passwordInputs: FormGroup;

  constructor(
    private messageService: MessageService,
    private router: Router,
    private loginController: LoginController
  ) {
    this.pipe = new DatePipe('en-PH');
    this.passwordInputs = new FormGroup(
      {
        resetcode: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(StrongPasswordRegx),
        ]),
        cpassword: new FormControl(null),
      },
      {
        validators: matchpassword,
      }
    );
  }

  sendmail() {
    // console.log(this.email);
    this.loadingbtn = true;
    this.loginController.forgotpass({ email_address: this.email }).subscribe({
      next: (res) => {
        this.info = res;
        // console.log(res);
        if (this.info['message'] === 'Success') {
          console.log('lapos');
          this.messageService.add({
            severity: 'success',
            summary: 'Email Sent',
            detail: 'A code has been sent to your email.',
          });
          this.reset = true;
          this.loadingbtn = false;
        } else {
          console.log('di lapos');
          this.messageService.add({
            severity: 'error',
            summary: 'Invalid Email',
            detail: 'Email address not exist in system',
          });
          this.email = '';
          this.loadingbtn = false;
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    });
  }

  clearInputs() {
    this.passwordInputs.reset();
  }

  verifCodeSubmit() {
    this.loadingbtn = true;
    this.loginController
      .resetpass({
        resetcode: this.passwordInputs.get('resetcode')?.value,
        password: '',
      })
      .subscribe({
        next: (res) => {
          this.info = res;
          const d = Date();
          const myFormattedDate = this.pipe.transform(d, 'Y-MM-dd HH:mm:ss');
          if (this.info['status'] == 'Success') {
            if (this.info[0]['expire'] <= myFormattedDate) {
              console.log('expire na');
              Swal.fire({
                title: 'Code Expired',
                text: 'Tap to resend again.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Resend Code',
              }).then((result) => {
                if (result.isConfirmed) {
                  this.loginController
                    .forgotpass({
                      email_address: this.email,
                    })
                    .subscribe((res) => {
                      console.log('Resent Success', res);
                    });
                  Swal.fire({
                    title: 'Code Resent!',
                    text: 'A new code has been sent to your email.',
                    icon: 'success',
                  });
                  this.clearInputs();
                  this.loadingbtn = false;
                }
              });
            } else {
              console.log('di pa');
              this.messageService.add({
                severity: 'success',
                summary: 'Code Verified',
                detail: 'Enter new password',
              });
              this.showForm3 = true;
            }
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: this.info['message'] || 'An error occurred',
            });
            this.clearInputs();
            this.loadingbtn = false;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.error(err.message);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'An error occurred while verifying the code',
          });
        },
      });
  }

  resetPasswordSubmit() {
    this.loading = true;
    this.loginController.resetpass(this.passwordInputs.value).subscribe({
      next: (res) => {
        this.info = res;
        if (this.info['status'] == 'Success') {
          // console.log('Password reset successful');
          this.messageService.add({
            severity: 'success',
            summary: 'Reset Success',
            detail: 'Enjoy!',
          });
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 4000);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: this.info['message'] || 'Failed to reset password',
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error(err.message);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'An error occurred while resetting the password',
        });
      },
    });
  }
}
