import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPovComponent } from './registrar-pov.component';

describe('RegistrarPovComponent', () => {
  let component: RegistrarPovComponent;
  let fixture: ComponentFixture<RegistrarPovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPovComponent]
    });
    fixture = TestBed.createComponent(RegistrarPovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
