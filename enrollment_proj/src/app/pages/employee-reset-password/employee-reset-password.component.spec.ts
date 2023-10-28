import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResetPasswordComponent } from './employee-reset-password.component';

describe('EmployeeResetPasswordComponent', () => {
  let component: EmployeeResetPasswordComponent;
  let fixture: ComponentFixture<EmployeeResetPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeResetPasswordComponent]
    });
    fixture = TestBed.createComponent(EmployeeResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
