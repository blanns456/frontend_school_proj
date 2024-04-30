import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateNavbarComponent } from './graduate-navbar.component';

describe('GraduateNavbarComponent', () => {
  let component: GraduateNavbarComponent;
  let fixture: ComponentFixture<GraduateNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraduateNavbarComponent]
    });
    fixture = TestBed.createComponent(GraduateNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
