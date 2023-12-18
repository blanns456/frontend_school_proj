import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitGradesComponent } from './submit-grades.component';

describe('SubmitGradesComponent', () => {
  let component: SubmitGradesComponent;
  let fixture: ComponentFixture<SubmitGradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitGradesComponent]
    });
    fixture = TestBed.createComponent(SubmitGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
