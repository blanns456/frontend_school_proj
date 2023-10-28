import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollCollege2Component } from './enroll-college2.component';

describe('EnrollCollege2Component', () => {
  let component: EnrollCollege2Component;
  let fixture: ComponentFixture<EnrollCollege2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollCollege2Component]
    });
    fixture = TestBed.createComponent(EnrollCollege2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
