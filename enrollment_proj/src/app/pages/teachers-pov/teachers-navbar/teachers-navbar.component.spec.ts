import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersNavbarComponent } from './teachers-navbar.component';

describe('TeachersNavbarComponent', () => {
  let component: TeachersNavbarComponent;
  let fixture: ComponentFixture<TeachersNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersNavbarComponent]
    });
    fixture = TestBed.createComponent(TeachersNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
