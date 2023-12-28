import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansAssignSubjectsComponent } from './deans-assign-subjects.component';

describe('DeansAssignSubjectsComponent', () => {
  let component: DeansAssignSubjectsComponent;
  let fixture: ComponentFixture<DeansAssignSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeansAssignSubjectsComponent]
    });
    fixture = TestBed.createComponent(DeansAssignSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
