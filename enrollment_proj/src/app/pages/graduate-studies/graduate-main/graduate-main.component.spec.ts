import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateMainComponent } from './graduate-main.component';

describe('GraduateMainComponent', () => {
  let component: GraduateMainComponent;
  let fixture: ComponentFixture<GraduateMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraduateMainComponent]
    });
    fixture = TestBed.createComponent(GraduateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
