import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRegistrarComponent } from './signup-registrar.component';

describe('SignupRegistrarComponent', () => {
  let component: SignupRegistrarComponent;
  let fixture: ComponentFixture<SignupRegistrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupRegistrarComponent]
    });
    fixture = TestBed.createComponent(SignupRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
