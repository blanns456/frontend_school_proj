import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarNavbarComponent } from './registrar-navbar.component';

describe('RegistrarNavbarComponent', () => {
  let component: RegistrarNavbarComponent;
  let fixture: ComponentFixture<RegistrarNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarNavbarComponent]
    });
    fixture = TestBed.createComponent(RegistrarNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
