import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardSettingsComponent } from './student-dashboard-settings.component';

describe('StudentDashboardSettingsComponent', () => {
  let component: StudentDashboardSettingsComponent;
  let fixture: ComponentFixture<StudentDashboardSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDashboardSettingsComponent]
    });
    fixture = TestBed.createComponent(StudentDashboardSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
