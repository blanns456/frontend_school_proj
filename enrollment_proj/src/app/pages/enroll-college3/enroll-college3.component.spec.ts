import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollCollege3Component } from './enroll-college3.component';

describe('EnrollCollege3Component', () => {
  let component: EnrollCollege3Component;
  let fixture: ComponentFixture<EnrollCollege3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollCollege3Component]
    });
    fixture = TestBed.createComponent(EnrollCollege3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
