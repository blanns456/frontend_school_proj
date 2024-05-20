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

import { ScrollTopModule } from 'primeng/scrolltop';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { InputOtpModule } from 'primeng/inputotp';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { DividerModule } from 'primeng/divider';
import { MultiSelectModule } from 'primeng/multiselect';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { StepperModule } from 'primeng/stepper';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PaginatorModule } from 'primeng/paginator';

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
import { AddSemesterComponent } from './pages/registrar-pov/add-semester/add-semester.component';
import { DeansClassroomComponent } from './pages/deans-pov/deans-classroom/deans-classroom.component';
import { StudentNewComponent } from './pages/students-pov/student-new/student-new.component';
import { ProspectusComponent } from './pages/registrar-pov/prospectus/prospectus.component';
import { CourseListComponent } from './pages/registrar-pov/course-list/course-list.component';
import { ProspectusStudentsComponent } from './pages/students-pov/prospectus-students/prospectus-students.component';
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
import { StudentProspectusCoursesComponent } from './pages/students-pov/student-prospectus-courses/student-prospectus-courses.component';
import { ApproveStudentsDeanComponent } from './pages/deans-pov/approve-students-dean/approve-students-dean.component';
import { LoadingPageComponent } from './component/loading-page/loading-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationReqsComponent } from './pages/homepage/requirements/registration-reqs/registration-reqs.component';
import { DepartmentUiComponent } from './pages/homepage/departments/department-ui/department-ui.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { StudentParentComponent } from './pages/students-pov/student-parent/student-parent.component';
import { CceUiComponent } from './pages/homepage/departments/cce-ui/cce-ui.component';
import { CbaeUiComponent } from './pages/homepage/departments/cbae-ui/cbae-ui.component';
import { CcjeUiComponent } from './pages/homepage/departments/ccje-ui/ccje-ui.component';
import { CteUiComponent } from './pages/homepage/departments/cte-ui/cte-ui.component';
import { ShsUiComponent } from './pages/homepage/departments/shs-ui/shs-ui.component';
import { AboutascComponent } from './pages/homepage/aboutasc/aboutasc.component';
import { HistoryAscComponent } from './pages/homepage/aboutasc/history-asc/history-asc.component';
import { DeptCceComponent } from './pages/home-tab/dept-cce/dept-cce.component';
import { DeptUi01Component } from './pages/home-tab/dept-ui01/dept-ui01.component';
import { DeptCbaeComponent } from './pages/home-tab/dept-cbae/dept-cbae.component';
import { DeptCcjeComponent } from './pages/home-tab/dept-ccje/dept-ccje.component';
import { DeptCteComponent } from './pages/home-tab/dept-cte/dept-cte.component';
import { DeptShsComponent } from './pages/home-tab/dept-shs/dept-shs.component';
import { DeptElementaryComponent } from './pages/home-tab/dept-elementary/dept-elementary.component';
import { DeptJhsComponent } from './pages/home-tab/dept-jhs/dept-jhs.component';
import { DeptTvetComponent } from './pages/home-tab/dept-tvet/dept-tvet.component';
import { ItemModalsComponent } from './pages/accounting-pov/accounting-item-management/item-modals/item-modals.component';
import { UpdateInfoComponent } from './pages/students-pov/update-info/update-info.component';
import { DeanMainComponent } from './pages/deans-pov/dean-main/dean-main.component';
import { NewComponent } from './pages/graduate-studies/new/new.component';
import { GraduateMainComponent } from './pages/graduate-studies/graduate-main/graduate-main.component';
import { GraduateSidebarComponent } from './pages/graduate-studies/graduate-sidebar/graduate-sidebar.component';
import { GraduateNavbarComponent } from './pages/graduate-studies/graduate-navbar/graduate-navbar.component';
import { GraduateHomeComponent } from './pages/graduate-studies/graduate-home/graduate-home.component';
import { MaedInformationComponent } from './pages/graduate-studies/maed-information/maed-information.component';
import { MaedAcademicComponent } from './pages/graduate-studies/maed-academic/maed-academic.component';
import { MaedFinanceComponent } from './pages/graduate-studies/maed-finance/maed-finance.component';
import { MaedProspectusComponent } from './pages/graduate-studies/maed-prospectus/maed-prospectus.component';
import { MaedCoursesComponent } from './pages/graduate-studies/maed-courses/maed-courses.component';
import { MaedEnrollmentComponent } from './pages/graduate-studies/maed-enrollment/maed-enrollment.component';
import { MaedUpdateInformationComponent } from './pages/graduate-studies/maed-update-information/maed-update-information.component';
import { StudentCurrentCoursesComponent } from './pages/deans-pov/student-current-courses/student-current-courses.component';

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
    AddSemesterComponent,
    DeansClassroomComponent,
    StudentNewComponent,
    ProspectusComponent,
    CourseListComponent,
    ProspectusStudentsComponent,
    EmailConfirmationComponent,
    StudentProspectusCoursesComponent,
    ApproveStudentsDeanComponent,
    HomepageComponent,
    RegistrationReqsComponent,
    DepartmentUiComponent,
    LoadingPageComponent,
    FooterNavComponent,
    StudentParentComponent,
    CceUiComponent,
    CbaeUiComponent,
    CcjeUiComponent,
    CteUiComponent,
    ShsUiComponent,
    AboutascComponent,
    HistoryAscComponent,
    DeptCceComponent,
    DeptUi01Component,
    DeptCbaeComponent,
    DeptCcjeComponent,
    DeptCteComponent,
    DeptShsComponent,
    DeptElementaryComponent,
    DeptJhsComponent,
    DeptTvetComponent,
    ItemModalsComponent,
    UpdateInfoComponent,
    DeanMainComponent,
    NewComponent,
    GraduateMainComponent,
    GraduateSidebarComponent,
    GraduateNavbarComponent,
    GraduateHomeComponent,
    MaedInformationComponent,
    MaedAcademicComponent,
    MaedFinanceComponent,
    MaedProspectusComponent,
    MaedCoursesComponent,
    MaedEnrollmentComponent,
    MaedUpdateInformationComponent,
    StudentCurrentCoursesComponent,
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
    BrowserAnimationsModule,
    InputOtpModule,
    InputMaskModule,
    ToastModule,
    ButtonModule,
    GalleriaModule,
    PasswordModule,
    InputTextModule,
    MessagesModule,
    ProgressBarModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    AutoFocusModule,
    DividerModule,
    MultiSelectModule,
    SidebarModule,
    AvatarModule,
    TableModule,
    TagModule,
    CardModule,
    DialogModule,
    ScrollTopModule,
    InputNumberModule,
    ConfirmDialogModule,
    TabViewModule,
    FileUploadModule,
    StepperModule,
    AccordionModule,
    PanelModule,
    FieldsetModule,
    TabMenuModule,
    MenuModule,
    IconFieldModule,
    InputIconModule,
    PaginatorModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
