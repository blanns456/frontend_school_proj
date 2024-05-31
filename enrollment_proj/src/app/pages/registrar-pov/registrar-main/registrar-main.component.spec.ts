import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMainComponent } from './registrar-main.component';

describe('RegistrarMainComponent', () => {
  let component: RegistrarMainComponent;
  let fixture: ComponentFixture<RegistrarMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarMainComponent]
    });
    fixture = TestBed.createComponent(RegistrarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
