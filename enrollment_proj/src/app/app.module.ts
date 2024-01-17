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
import { HttpClientModule } from '@angular/common/http';
import { CollegeSignaturepadComponent } from './pages/college-signaturepad/college-signaturepad.component';
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
import { SignupTeacherComponent } from './pages/signup-staff/signup-teacher/signup-teacher.component';
import { SignupDeanComponent } from './pages/signup-staff/signup-dean/signup-dean.component';
import { SignupRegistrarComponent } from './pages/signup-staff/signup-registrar/signup-registrar.component';
import { AccountingStatementOfAccountsComponent } from './pages/accounting-pov/accounting-reports/accounting-statement-of-accounts/accounting-statement-of-accounts.component';
import { AccountingStudentLedgerComponent } from './pages/accounting-pov/accounting-reports/accounting-student-ledger/accounting-student-ledger.component';
import { AccountingMatriculationComponent } from './pages/accounting-pov/accounting-finance/accounting-matriculation/accounting-matriculation.component';
import { AccountingViewuserComponent } from './pages/accounting-pov/accounting-finance/accounting-viewuser/accounting-viewuser.component';
import { StudentApplicantsComponent } from './pages/registrar-pov/student-applicants/student-applicants.component';
import { OfficiallyEnrolledComponent } from './pages/registrar-pov/officially-enrolled/officially-enrolled.component';
import { StudentInfoComponent } from './pages/registrar-pov/student-info/student-info.component';
import { AccountingItemManagementComponent } from './pages/accounting-pov/accounting-item-management/accounting-item-management.component';
import { DailycollectionSetupComponent } from './pages/accounting-pov/tellering/dailycollection-setup/dailycollection-setup.component';
import { TelleringListComponent } from './pages/accounting-pov/tellering/tellering-list/tellering-list.component';
import { TellerViewuserComponent } from './pages/accounting-pov/tellering/teller-viewuser/teller-viewuser.component';
import { TrustfundsItemsComponent } from './pages/accounting-pov/tellering/dailycollection-setup/trustfunds-items/trustfunds-items.component';
import { DailycollectionReportsComponent } from './pages/accounting-pov/tellering/dailycollection-reports/dailycollection-reports.component';
import { DailyconsolidatedReportsComponent } from './pages/accounting-pov/tellering/dailyconsolidated-reports/dailyconsolidated-reports.component';
import { TeachersDashboardHomeComponent } from './pages/teachers-pov/teachers-dashboard-home/teachers-dashboard-home.component';
import { TeachersSidebarComponent } from './pages/teachers-pov/teachers-sidebar/teachers-sidebar.component';
import { TeachersNavbarComponent } from './pages/teachers-pov/teachers-navbar/teachers-navbar.component';
import { TeachersClasslistComponent } from './pages/teachers-pov/teachers-classlist/teachers-classlist.component';
import { ViewSubjectsComponent } from './pages/teachers-pov/view-subjects/view-subjects.component';
import { SubmitGradesComponent } from './pages/teachers-pov/submit-grades/submit-grades.component';
import { ViewSubmitgradesComponent } from './pages/teachers-pov/view-submitgrades/view-submitgrades.component';
import { DeansDashboardHomeComponent } from './pages/deans-pov/deans-dashboard-home/deans-dashboard-home.component';
import { DeansSidebarComponent } from './pages/deans-pov/deans-sidebar/deans-sidebar.component';
import { DeansNavbarComponent } from './pages/deans-pov/deans-navbar/deans-navbar.component';
import { DeansGradeApprovalComponent } from './pages/deans-pov/deans-grade-approval/deans-grade-approval.component';
import { DeansAssignSubjectsComponent } from './pages/deans-pov/deans-assign-subjects/deans-assign-subjects.component';
import { DeansSubjectlistComponent } from './pages/deans-pov/deans-subjectlist/deans-subjectlist.component';
import { StudentGradesComponent } from './pages/registrar-pov/student-grades/student-grades.component';
import { StudentNewComponent } from './pages/students-pov/student-new/student-new.component';
import { ProspectusComponent } from './pages/registrar-pov/prospectus/prospectus.component';
import { CourseListComponent } from './pages/registrar-pov/course-list/course-list.component';


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
    CollegeSignaturepadComponent,
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
    SignupTeacherComponent,
    SignupDeanComponent,
    SignupRegistrarComponent,
    AccountingStatementOfAccountsComponent,
    AccountingStudentLedgerComponent,
    AccountingMatriculationComponent,
    AccountingViewuserComponent,
    StudentApplicantsComponent,
    OfficiallyEnrolledComponent,
    StudentInfoComponent,
    AccountingItemManagementComponent,
    DailycollectionSetupComponent,
    TelleringListComponent,
    TellerViewuserComponent,
    TrustfundsItemsComponent,
    DailycollectionReportsComponent,
    DailyconsolidatedReportsComponent,
    TeachersDashboardHomeComponent,
    TeachersSidebarComponent,
    TeachersNavbarComponent,
    TeachersClasslistComponent,
    ViewSubjectsComponent,
    SubmitGradesComponent,
    ViewSubmitgradesComponent,
    DeansDashboardHomeComponent,
    DeansSidebarComponent,
    DeansNavbarComponent,
    DeansGradeApprovalComponent,
    DeansAssignSubjectsComponent,
    DeansSubjectlistComponent,
    StudentGradesComponent,
    StudentNewComponent,
    ProspectusComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    AngularSignaturePadModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
