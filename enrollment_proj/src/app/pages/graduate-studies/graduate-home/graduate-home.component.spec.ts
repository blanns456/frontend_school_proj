import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateHomeComponent } from './graduate-home.component';

describe('GraduateHomeComponent', () => {
  let component: GraduateHomeComponent;
  let fixture: ComponentFixture<GraduateHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraduateHomeComponent]
    });
    fixture = TestBed.createComponent(GraduateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
