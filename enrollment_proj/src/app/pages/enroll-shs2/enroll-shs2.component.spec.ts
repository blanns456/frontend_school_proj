import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollShs2Component } from './enroll-shs2.component';

describe('EnrollShs2Component', () => {
  let component: EnrollShs2Component;
  let fixture: ComponentFixture<EnrollShs2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollShs2Component]
    });
    fixture = TestBed.createComponent(EnrollShs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
