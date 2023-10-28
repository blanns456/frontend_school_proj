import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { EnrollTesdaComponent } from './pages/enroll-tesda/enroll-tesda.component';
import { StudentResetPasswordComponent } from './pages/student-reset-password/student-reset-password.component';
import { EmployeeResetPasswordComponent } from './pages/employee-reset-password/employee-reset-password.component';
import { EnrollCollegeComponent } from './pages/enroll-college/enroll-college.component';
import { EnrollCollege2Component } from './pages/enroll-college2/enroll-college2.component';
import { EnrollCollege3Component } from './pages/enroll-college3/enroll-college3.component';
import { EnrollCollege4Component } from './pages/enroll-college4/enroll-college4.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'enroll-tesda', component: EnrollTesdaComponent },
  { path: 'enroll-college', component: EnrollCollegeComponent },
  { path: 'enroll-college-student-information', component: EnrollCollege2Component },
  { path: 'enroll-college-education-record', component: EnrollCollege3Component },
  { path: 'enroll-college-signature', component: EnrollCollege4Component },
  { path: 'student-reset-password', component: StudentResetPasswordComponent },
  {
    path: 'employee-reset-password',
    component: EmployeeResetPasswordComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
