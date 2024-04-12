import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentParentComponent } from './student-parent.component';

describe('StudentParentComponent', () => {
  let component: StudentParentComponent;
  let fixture: ComponentFixture<StudentParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentParentComponent]
    });
    fixture = TestBed.createComponent(StudentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
