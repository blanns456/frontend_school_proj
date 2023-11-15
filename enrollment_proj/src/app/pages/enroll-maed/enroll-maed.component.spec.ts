import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollMaedComponent } from './enroll-maed.component';

describe('EnrollMaedComponent', () => {
  let component: EnrollMaedComponent;
  let fixture: ComponentFixture<EnrollMaedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollMaedComponent]
    });
    fixture = TestBed.createComponent(EnrollMaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
