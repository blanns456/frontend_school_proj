import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollSignaturePadComponent } from './enroll-signature-pad.component';

describe('EnrollSignaturePadComponent', () => {
  let component: EnrollSignaturePadComponent;
  let fixture: ComponentFixture<EnrollSignaturePadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollSignaturePadComponent]
    });
    fixture = TestBed.createComponent(EnrollSignaturePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
