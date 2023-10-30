import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollMaed2Component } from './enroll-maed2.component';

describe('EnrollMaed2Component', () => {
  let component: EnrollMaed2Component;
  let fixture: ComponentFixture<EnrollMaed2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollMaed2Component]
    });
    fixture = TestBed.createComponent(EnrollMaed2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
