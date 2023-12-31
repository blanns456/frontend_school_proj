import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateSuccessComponent } from './validate-success.component';

describe('ValidateSuccessComponent', () => {
  let component: ValidateSuccessComponent;
  let fixture: ComponentFixture<ValidateSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateSuccessComponent]
    });
    fixture = TestBed.createComponent(ValidateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
