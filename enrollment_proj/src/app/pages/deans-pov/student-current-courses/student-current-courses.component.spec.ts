import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCurrentCoursesComponent } from './student-current-courses.component';

describe('StudentCurrentCoursesComponent', () => {
  let component: StudentCurrentCoursesComponent;
  let fixture: ComponentFixture<StudentCurrentCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCurrentCoursesComponent]
    });
    fixture = TestBed.createComponent(StudentCurrentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
