import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplicantsComponent } from './student-applicants.component';

describe('StudentApplicantsComponent', () => {
  let component: StudentApplicantsComponent;
  let fixture: ComponentFixture<StudentApplicantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentApplicantsComponent]
    });
    fixture = TestBed.createComponent(StudentApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
