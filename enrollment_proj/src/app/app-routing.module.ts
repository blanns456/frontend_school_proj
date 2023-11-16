import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { EnrollTesdaComponent } from './pages/enroll-tesda/enroll-tesda.component';
import { StudentResetPasswordComponent } from './pages/students-pov/student-reset-password/student-reset-password.component';
import { EmployeeResetPasswordComponent } from './pages/employee-reset-password/employee-reset-password.component';
import { EnrollCollegeComponent } from './pages/enroll-college/enroll-college.component';
import { EnrollCollege2Component } from './pages/enroll-college2/enroll-college2.component';
import { EnrollCollege3Component } from './pages/enroll-college3/enroll-college3.component';
import { EnrollCollege4Component } from './pages/enroll-college4/enroll-college4.component';
import { EnrollShsComponent } from './pages/enroll-shs/enroll-shs.component';
import { EnrollShs2Component } from './pages/enroll-shs2/enroll-shs2.component';
import { EnrollShs3Component } from './pages/enroll-shs3/enroll-shs3.component';
import { EnrollMaedComponent } from './pages/enroll-maed/enroll-maed.component';
import { EnrollMaed2Component } from './pages/enroll-maed2/enroll-maed2.component';
import { EnrollMaed3Component } from './pages/enroll-maed3/enroll-maed3.component';
import { StudentDashboardHomeComponent } from './pages/students-pov/student-dashboard-home/student-dashboard-home.component';
import { StudentDashboardInformationComponent } from './pages/students-pov/student-dashboard-information/student-dashboard-information.component';
import { StudentDashboardParentComponent } from './pages/students-pov/student-dashboard-parent/student-dashboard-parent.component';
import { StudentDashboardAcademicComponent } from './pages/students-pov/student-dashboard-academic/student-dashboard-academic.component';
import { StudentDashboardFinancialComponent } from './pages/students-pov/student-dashboard-financial/student-dashboard-financial.component';
import { StudentDashboardEnrollmentComponent } from './pages/students-pov/student-dashboard-enrollment/student-dashboard-enrollment.component';

import { AccountingDashboardHomeComponent } from './pages/accounting-pov/accounting-dashboard-home/accounting-dashboard-home.component';
import { StudentDashboardSettingsComponent } from './pages/students-pov/student-dashboard-settings/student-dashboard-settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'enroll-tesda', component: EnrollTesdaComponent },
  { path: 'enroll-college', component: EnrollCollegeComponent },
  {
    path: 'enroll-college-student-information',
    component: EnrollCollege2Component,
  },
  {
    path: 'enroll-college-education-record',
    component: EnrollCollege3Component,
  },
  { path: 'enroll-shs', component: EnrollShsComponent },
  { path: 'enroll-shs-student-information', component: EnrollShs2Component },
  { path: 'enroll-shs-education-record', component: EnrollShs3Component },
  { path: 'enroll-maed', component: EnrollMaedComponent },
  { path: 'enroll-maed-student-information', component: EnrollMaed2Component },
  { path: 'enroll-maed-education-record', component: EnrollMaed3Component },
  { path: 'enroll-college-signature', component: EnrollCollege4Component },
  { path: 'student-reset-password', component: StudentResetPasswordComponent },
  { path: 'student-dashboard-home', component: StudentDashboardHomeComponent },
  { path: 'student-dashboard-information', component: StudentDashboardInformationComponent },
  { path: 'student-dashboard-parent', component: StudentDashboardParentComponent },
  { path: 'student-dashboard-academic', component: StudentDashboardAcademicComponent },
  { path: 'student-dashboard-financial', component: StudentDashboardFinancialComponent },
  { path: 'student-dashboard-enrollment', component: StudentDashboardEnrollmentComponent },
  { path: 'student-dashboard-settings', component: StudentDashboardSettingsComponent },
  {
    path: 'employee-reset-password',
    component: EmployeeResetPasswordComponent,
  },
  { path: '**', component: NotFoundComponent },
  { path: 'accounting-dashboard-home', component: AccountingDashboardHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
