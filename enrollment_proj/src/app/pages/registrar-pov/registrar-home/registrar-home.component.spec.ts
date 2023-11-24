import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHomeComponent } from './registrar-home.component';


describe('RegistrarHomeComponent', () => {
  let component: RegistrarHomeComponent;
  let fixture: ComponentFixture<RegistrarHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarHomeComponent]
    });
    fixture = TestBed.createComponent(RegistrarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
