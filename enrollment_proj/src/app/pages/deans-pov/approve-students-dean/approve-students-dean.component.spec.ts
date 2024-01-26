import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveStudentsDeanComponent } from './approve-students-dean.component';

describe('ApproveStudentsDeanComponent', () => {
  let component: ApproveStudentsDeanComponent;
  let fixture: ComponentFixture<ApproveStudentsDeanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveStudentsDeanComponent]
    });
    fixture = TestBed.createComponent(ApproveStudentsDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
