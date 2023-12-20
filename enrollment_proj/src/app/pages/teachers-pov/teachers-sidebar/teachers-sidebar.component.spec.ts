import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersSidebarComponent } from './teachers-sidebar.component';

describe('TeachersSidebarComponent', () => {
  let component: TeachersSidebarComponent;
  let fixture: ComponentFixture<TeachersSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersSidebarComponent]
    });
    fixture = TestBed.createComponent(TeachersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
