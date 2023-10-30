import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollMaed3Component } from './enroll-maed3.component';

describe('EnrollMaed3Component', () => {
  let component: EnrollMaed3Component;
  let fixture: ComponentFixture<EnrollMaed3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollMaed3Component]
    });
    fixture = TestBed.createComponent(EnrollMaed3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
