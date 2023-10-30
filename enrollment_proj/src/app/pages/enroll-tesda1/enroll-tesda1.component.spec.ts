import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollTesda1Component } from './enroll-tesda1.component';

describe('EnrollTesda1Component', () => {
  let component: EnrollTesda1Component;
  let fixture: ComponentFixture<EnrollTesda1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollTesda1Component]
    });
    fixture = TestBed.createComponent(EnrollTesda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
