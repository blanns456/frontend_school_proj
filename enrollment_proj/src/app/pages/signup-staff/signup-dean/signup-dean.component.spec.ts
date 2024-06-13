import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDeanComponent } from './signup-dean.component';

describe('SignupDeanComponent', () => {
  let component: SignupDeanComponent;
  let fixture: ComponentFixture<SignupDeanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupDeanComponent]
    });
    fixture = TestBed.createComponent(SignupDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
