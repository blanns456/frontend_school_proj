import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  submit(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.login(email, password).subscribe({
        next: () => {
          this.redirectBasedOnRole();
        },
          error: (error) => {
          console.error(error);
          this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid email or password' });
        }
      });
      // this.authService.login(email, password).subscribe(
      //   () => {
      //     this.redirectBasedOnRole();
      //   },
      //   error => {
      //     console.error(error);
      //     this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid email or password' });
      //   }
      // );
    }
  }

  private redirectBasedOnRole(): void {
    this.authService.getUserRoles().subscribe(roles => {
      if (roles.includes('college')) {
        this.router.navigate(['/student']);
      } else if (roles.includes('dean')) {
        this.router.navigate(['/dean']);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }
}
