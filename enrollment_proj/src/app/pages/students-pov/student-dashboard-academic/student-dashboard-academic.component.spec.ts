import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardAcademicComponent } from './student-dashboard-academic.component';

describe('StudentDashboardAcademicComponent', () => {
  let component: StudentDashboardAcademicComponent;
  let fixture: ComponentFixture<StudentDashboardAcademicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardAcademicComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardAcademicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
