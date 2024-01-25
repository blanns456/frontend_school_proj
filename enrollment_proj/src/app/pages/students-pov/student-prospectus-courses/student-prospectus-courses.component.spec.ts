import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProspectusCoursesComponent } from './student-prospectus-courses.component';

describe('StudentProspectusCoursesComponent', () => {
  let component: StudentProspectusCoursesComponent;
  let fixture: ComponentFixture<StudentProspectusCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentProspectusCoursesComponent]
    });
    fixture = TestBed.createComponent(StudentProspectusCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
