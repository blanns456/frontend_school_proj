import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollTesda3Component } from './enroll-tesda3.component';

describe('EnrollTesda3Component', () => {
  let component: EnrollTesda3Component;
  let fixture: ComponentFixture<EnrollTesda3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollTesda3Component]
    });
    fixture = TestBed.createComponent(EnrollTesda3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
