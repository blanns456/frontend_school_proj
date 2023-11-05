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
import { EnrollTesdaComponent } from './pages/enroll-tesda/enroll-tesda.component';
import { HeadnavagationComponent } from './pages/headnavagation/headnavagation.component';
import { StudentResetPasswordComponent } from './pages/student-reset-password/student-reset-password.component';
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
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatPaginationComponent } from './pages/mat-pagination/mat-pagination.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    HomeComponent,
    EnrollTesdaComponent,
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

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
