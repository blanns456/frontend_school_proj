import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollShs3Component } from './enroll-shs3.component';

describe('EnrollShs3Component', () => {
  let component: EnrollShs3Component;
  let fixture: ComponentFixture<EnrollShs3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollShs3Component]
    });
    fixture = TestBed.createComponent(EnrollShs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
