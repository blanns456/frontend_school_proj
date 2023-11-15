import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardParentComponent } from './student-dashboard-parent.component';

describe('StudentDashboardParentComponent', () => {
  let component: StudentDashboardParentComponent;
  let fixture: ComponentFixture<StudentDashboardParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardParentComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
