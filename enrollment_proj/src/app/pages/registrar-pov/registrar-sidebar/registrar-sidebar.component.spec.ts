import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSidebarComponent } from './registrar-sidebar.component';

describe('RegistrarSidebarComponent', () => {
  let component: RegistrarSidebarComponent;
  let fixture: ComponentFixture<RegistrarSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarSidebarComponent]
    });
    fixture = TestBed.createComponent(RegistrarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
