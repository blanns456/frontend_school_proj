import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollCollege4Component } from './enroll-college4.component';

describe('EnrollCollege4Component', () => {
  let component: EnrollCollege4Component;
  let fixture: ComponentFixture<EnrollCollege4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollCollege4Component]
    });
    fixture = TestBed.createComponent(EnrollCollege4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
