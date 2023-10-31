import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardSidebarComponent } from './student-dashboard-sidebar.component';

describe('StudentDashboardSidebarComponent', () => {
  let component: StudentDashboardSidebarComponent;
  let fixture: ComponentFixture<StudentDashboardSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardSidebarComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
