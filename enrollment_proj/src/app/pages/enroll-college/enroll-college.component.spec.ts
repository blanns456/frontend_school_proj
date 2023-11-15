import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollCollegeComponent } from './enroll-college.component';

describe('EnrollCollegeComponent', () => {
  let component: EnrollCollegeComponent;
  let fixture: ComponentFixture<EnrollCollegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollCollegeComponent]
    });
    fixture = TestBed.createComponent(EnrollCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
