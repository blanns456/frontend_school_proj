import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardFinancialComponent } from './student-dashboard-financial.component';

describe('StudentDashboardFinancialComponent', () => {
  let component: StudentDashboardFinancialComponent;
  let fixture: ComponentFixture<StudentDashboardFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardFinancialComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
