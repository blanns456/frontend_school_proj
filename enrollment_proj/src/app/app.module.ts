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
import { AngularSignaturePadModule } from '@almothafar/angular-signature-pad';
import { EnrollSignaturePadComponent } from './pages/enroll-signature-pad/enroll-signature-pad.component';



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
    EnrollSignaturePadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    AngularSignaturePadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
