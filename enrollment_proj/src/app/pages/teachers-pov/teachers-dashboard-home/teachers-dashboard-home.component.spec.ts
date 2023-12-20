import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersDashboardHomeComponent } from './teachers-dashboard-home.component';

describe('TeachersDashboardHomeComponent', () => {
  let component: TeachersDashboardHomeComponent;
  let fixture: ComponentFixture<TeachersDashboardHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersDashboardHomeComponent]
    });
    fixture = TestBed.createComponent(TeachersDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
