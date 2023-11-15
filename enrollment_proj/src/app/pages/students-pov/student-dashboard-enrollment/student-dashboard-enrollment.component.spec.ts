import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardEnrollmentComponent } from './student-dashboard-enrollment.component';

describe('StudentDashboardEnrollmentComponent', () => {
  let component: StudentDashboardEnrollmentComponent;
  let fixture: ComponentFixture<StudentDashboardEnrollmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardEnrollmentComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
