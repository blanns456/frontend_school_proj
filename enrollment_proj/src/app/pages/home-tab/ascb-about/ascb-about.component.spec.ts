import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscbAboutComponent } from './ascb-about.component';

describe('AscbAboutComponent', () => {
  let component: AscbAboutComponent;
  let fixture: ComponentFixture<AscbAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AscbAboutComponent]
    });
    fixture = TestBed.createComponent(AscbAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
