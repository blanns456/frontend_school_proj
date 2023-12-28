import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansGradeApprovalComponent } from './deans-grade-approval.component';

describe('DeansGradeApprovalComponent', () => {
  let component: DeansGradeApprovalComponent;
  let fixture: ComponentFixture<DeansGradeApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeansGradeApprovalComponent]
    });
    fixture = TestBed.createComponent(DeansGradeApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
