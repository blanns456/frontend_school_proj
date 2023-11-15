import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardInformationComponent } from './student-dashboard-information.component';

describe('StudentDashboardInformationComponent', () => {
  let component: StudentDashboardInformationComponent;
  let fixture: ComponentFixture<StudentDashboardInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardInformationComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
