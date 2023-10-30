import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollTesda2Component } from './enroll-tesda2.component';

describe('EnrollTesda2Component', () => {
  let component: EnrollTesda2Component;
  let fixture: ComponentFixture<EnrollTesda2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollTesda2Component]
    });
    fixture = TestBed.createComponent(EnrollTesda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
