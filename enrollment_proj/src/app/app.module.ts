import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { HeadnavagationComponent } from './pages/headnavagation/headnavagation.component';
import { StudentResetPasswordComponent } from './pages/students-pov/student-reset-password/student-reset-password.component';
import { EmployeeResetPasswordComponent } from './pages/employee-reset-password/employee-reset-password.component';
import { EnrollCollegeComponent } from './pages/enroll-college/enroll-college.component';
import { FooternavigationComponent } from './pages/footernavigation/footernavigation.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { EnrollCollege2Component } from './pages/enroll-college2/enroll-college2.component';
import { EnrollCollege3Component } from './pages/enroll-college3/enroll-college3.component';
import { EnrollCollege4Component } from './pages/enroll-college4/enroll-college4.component';
// import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { EnrollSignaturePadComponent } from './pages/enroll-signature-pad/enroll-signature-pad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginationComponent } from './pages/mat-pagination/mat-pagination.component';

import { StudentDashboardHomeComponent } from './pages/students-pov/student-dashboard-home/student-dashboard-home.component';
import { PaginationShsComponent } from './pages/pagination-shs/pagination-shs.component';
import { EnrollShsComponent } from './pages/enroll-shs/enroll-shs.component';
import { EnrollShs2Component } from './pages/enroll-shs2/enroll-shs2.component';
import { EnrollShs3Component } from './pages/enroll-shs3/enroll-shs3.component';
import { EnrollMaedComponent } from './pages/enroll-maed/enroll-maed.component';
import { EnrollMaed2Component } from './pages/enroll-maed2/enroll-maed2.component';
import { EnrollMaed3Component } from './pages/enroll-maed3/enroll-maed3.component';
import { PaginationMaedComponent } from './pages/pagination-maed/pagination-maed.component';
import { StudentSidebarComponent } from './pages/students-pov/student-sidebar/student-sidebar.component';
import { StudentNavbarComponent } from './pages/students-pov/student-navbar/student-navbar.component';
import { StudentDashboardAcademicComponent } from './pages/students-pov/student-dashboard-academic/student-dashboard-academic.component';
import { StudentDashboardFinancialComponent } from './pages/students-pov/student-dashboard-financial/student-dashboard-financial.component';
import { StudentDashboardSettingsComponent } from './pages/students-pov/student-dashboard-settings/student-dashboard-settings.component';
import { StudentDashboardEnrollmentComponent } from './pages/students-pov/student-dashboard-enrollment/student-dashboard-enrollment.component';
import { AccountingDashboardHomeComponent } from './pages/accounting-pov/accounting-dashboard-home/accounting-dashboard-home.component';
import { AccountingSidebarComponent } from './pages/accounting-pov/accounting-sidebar/accounting-sidebar.component';
import { AccountingNavbarComponent } from './pages/accounting-pov/accounting-navbar/accounting-navbar.component';
import { StudentDashboardInformationComponent } from './pages/students-pov/student-dashboard-information/student-dashboard-information.component';
import { StudentDashboardParentComponent } from './pages/students-pov/student-dashboard-parent/student-dashboard-parent.component';
import { EnrollTesdaComponent } from './pages/enroll-tesda/enroll-tesda.component';
import { EnrollTesda2Component } from './pages/enroll-tesda2/enroll-tesda2.component';
import { EnrollTesda3Component } from './pages/enroll-tesda3/enroll-tesda3.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RegistrarNavbarComponent } from './pages/registrar-pov/registrar-navbar/registrar-navbar.component';
import { RegistrarSidebarComponent } from './pages/registrar-pov/registrar-sidebar/registrar-sidebar.component';
import { RegistrarHomeComponent } from './pages/registrar-pov/registrar-home/registrar-home.component';
import { SignupAccountingComponent } from './pages/signup-staff/signup-accounting/signup-accounting.component';
import { AccountingDashboardSchoolfeesComponent } from './pages/accounting-pov/accounting-dashboard-schoolfees/accounting-dashboard-schoolfees.component';
import { AccountingDashboardLabfeesComponent } from './pages/accounting-pov/accounting-dashboard-labfees/accounting-dashboard-labfees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    HomeComponent,
    HeadnavagationComponent,
    StudentResetPasswordComponent,
    EmployeeResetPasswordComponent,
    EnrollSignaturePadComponent,

    EnrollCollegeComponent,
    FooternavigationComponent,
    PaginationComponent,
    EnrollCollege2Component,
    EnrollCollege3Component,
    EnrollCollege4Component,
    MatPaginationComponent,
    EnrollCollege4Component,
    StudentDashboardHomeComponent,
    PaginationShsComponent,
    EnrollShsComponent,
    EnrollShs2Component,
    EnrollShs3Component,
    PaginationMaedComponent,
    EnrollMaedComponent,
    EnrollMaed2Component,
    EnrollMaed3Component,
    StudentSidebarComponent,
    StudentNavbarComponent,
    StudentDashboardAcademicComponent,
    StudentDashboardFinancialComponent,
    StudentDashboardSettingsComponent,
    StudentDashboardEnrollmentComponent,
    AccountingDashboardHomeComponent,
    AccountingSidebarComponent,
    AccountingNavbarComponent,
    StudentDashboardInformationComponent,
    StudentDashboardParentComponent,
    EnrollTesdaComponent,
    EnrollTesda2Component,
    EnrollTesda3Component,
    RegistrarNavbarComponent,
    RegistrarSidebarComponent,
    RegistrarHomeComponent,
    SignupAccountingComponent,
    AccountingDashboardSchoolfeesComponent,
    AccountingDashboardLabfeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    AngularSignaturePadModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
