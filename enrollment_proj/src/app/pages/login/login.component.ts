import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  submit(): void {
    this.ngZone.run(() => {
      this.loading = true;
    });
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.login(email, password).subscribe({
        next: () => {
          this.redirectBasedOnRole();
        },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Login Failed', detail: 'Invalid email or password' });
            this.loading = false;
        }
      });
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
