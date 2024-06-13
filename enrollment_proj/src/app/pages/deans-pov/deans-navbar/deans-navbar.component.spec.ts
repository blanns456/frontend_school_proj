import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansNavbarComponent } from './deans-navbar.component';

describe('DeansNavbarComponent', () => {
  let component: DeansNavbarComponent;
  let fixture: ComponentFixture<DeansNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeansNavbarComponent]
    });
    fixture = TestBed.createComponent(DeansNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
