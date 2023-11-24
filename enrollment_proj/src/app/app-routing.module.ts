import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
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
import { StudentDashboardAcademicComponent } from './pages/students-pov/student-dashboard-academic/student-dashboard-academic.component';
import { StudentDashboardFinancialComponent } from './pages/students-pov/student-dashboard-financial/student-dashboard-financial.component';
import { StudentDashboardEnrollmentComponent } from './pages/students-pov/student-dashboard-enrollment/student-dashboard-enrollment.component';

import { AccountingDashboardHomeComponent } from './pages/accounting-pov/accounting-dashboard-home/accounting-dashboard-home.component';
import { StudentDashboardInformationComponent } from './pages/students-pov/student-dashboard-information/student-dashboard-information.component';
import { StudentDashboardParentComponent } from './pages/students-pov/student-dashboard-parent/student-dashboard-parent.component';
import { EnrollTesdaComponent } from './pages/enroll-tesda/enroll-tesda.component';
import { EnrollTesda2Component } from './pages/enroll-tesda2/enroll-tesda2.component';
import { EnrollTesda3Component } from './pages/enroll-tesda3/enroll-tesda3.component';
import { StudentDashboardSettingsComponent } from './pages/students-pov/student-dashboard-settings/student-dashboard-settings.component';
import { RegistrarNavbarComponent } from './pages/registrar-pov/registrar-navbar/registrar-navbar.component';
import { RegistrarSidebarComponent } from './pages/registrar-pov/registrar-sidebar/registrar-sidebar.component';
import { RegistrarHomeComponent } from './pages/registrar-pov/registrar-home/registrar-home.component';
import { SignupAccountingComponent } from './pages/signup-staff/signup-accounting/signup-accounting.component';
import { AccountingDashboardSchoolfeesComponent } from './pages/accounting-pov/accounting-dashboard-schoolfees/accounting-dashboard-schoolfees.component';
import { AccountingDashboardLabfeesComponent } from './pages/accounting-pov/accounting-dashboard-labfees/accounting-dashboard-labfees.component';
import { SignupTeacherComponent } from './pages/signup-staff/signup-teacher/signup-teacher.component';
import { SignupDeanComponent } from './pages/signup-staff/signup-dean/signup-dean.component';
import { SignupRegistrarComponent } from './pages/signup-staff/signup-registrar/signup-registrar.component';
import { AccountingStatementOfAccountsComponent } from './pages/accounting-pov/accounting-reports/accounting-statement-of-accounts/accounting-statement-of-accounts.component';
import { AccountingStudentLedgerComponent } from './pages/accounting-pov/accounting-reports/accounting-student-ledger/accounting-student-ledger.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
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
  { path: 'enroll-tesda', component: EnrollTesdaComponent },
  { path: 'enroll-tesda-student-information', component: EnrollTesda2Component },
  { path: 'enroll-tesda-education-record', component: EnrollTesda3Component },
  { path: 'enroll-college-signature', component: EnrollCollege4Component },
  { path: 'student-reset-password', component: StudentResetPasswordComponent },
  { path: 'student-dashboard-home', component: StudentDashboardHomeComponent },
  { path: 'student-dashboard-information', component: StudentDashboardInformationComponent },
  { path: 'student-dashboard-parent', component: StudentDashboardParentComponent },
  {
    path: 'student-dashboard-academic',
    component: StudentDashboardAcademicComponent,
  },
  {
    path: 'student-dashboard-financial',
    component: StudentDashboardFinancialComponent,
  },
  {
    path: 'accounting-dashboard-home',
    component: AccountingDashboardHomeComponent,
    title: 'Accounting | Home',
  },
  {
    path: 'accounting-dashboard-schoolfees',
    component: AccountingDashboardSchoolfeesComponent,
    title: 'Accounting | School Fees',
  },
  {
    path: 'accounting-dashboard-labfees',
    component: AccountingDashboardLabfeesComponent,
    title: 'Accounting | Lab Fees',
  },
  {
    path: 'accounting-dashboard-soa',
    component: AccountingStatementOfAccountsComponent,
    title: 'Accounting | Statement of Accounts',
  },
  {
    path: 'accounting-dashboard-studentledger',
    component: AccountingStudentLedgerComponent,
    title: 'Accounting | Student Ledger',
  },
  {
    path: 'student-dashboard-information',
    component: StudentDashboardInformationComponent,
  },
  {
    path: 'student-dashboard-parent',
    component: StudentDashboardParentComponent,
  },
  {
    path: 'student-dashboard-academic',
    component: StudentDashboardAcademicComponent,
  },
  {
    path: 'student-dashboard-financial',
    component: StudentDashboardFinancialComponent,
  },
  {
    path: 'student-dashboard-enrollment',
    component: StudentDashboardEnrollmentComponent,
  },
  {
    path: 'student-dashboard-settings',
    component: StudentDashboardSettingsComponent,
  },
  { path: 'student-dashboard-academic', component: StudentDashboardAcademicComponent },
  { path: 'student-dashboard-financial', component: StudentDashboardFinancialComponent },
  { path: 'student-dashboard-enrollment', component: StudentDashboardEnrollmentComponent },
  {
    path: 'employee-reset-password',
    component: EmployeeResetPasswordComponent,
  },
  {
    path: 'registrar-sidebar',
    component: RegistrarSidebarComponent,
  },
  {
    path: 'registrar-navbar',
    component: RegistrarNavbarComponent,
  },
  {
    path: 'registrar-home',
    component: RegistrarHomeComponent,
  },
  // signup staff route
  {
    path: 'accounting/staff/sign-up',
    component: SignupAccountingComponent,
  },
  {
    path: 'teacher/staff/sign-up',
    component: SignupTeacherComponent,
  },
  {
    path: 'dean/staff/sign-up',
    component: SignupDeanComponent,
  },
  {
    path: 'registrar/staff/sign-up',
    component: SignupRegistrarComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
