import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResetPasswordComponent } from './student-reset-password.component';

describe('StudentResetPasswordComponent', () => {
  let component: StudentResetPasswordComponent;
  let fixture: ComponentFixture<StudentResetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentResetPasswordComponent]
    });
    fixture = TestBed.createComponent(StudentResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
