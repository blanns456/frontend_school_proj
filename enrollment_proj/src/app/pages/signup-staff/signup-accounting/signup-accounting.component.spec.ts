import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAccountingComponent } from './signup-accounting.component';

describe('SignupAccountingComponent', () => {
  let component: SignupAccountingComponent;
  let fixture: ComponentFixture<SignupAccountingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupAccountingComponent]
    });
    fixture = TestBed.createComponent(SignupAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
