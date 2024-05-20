import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscbAboutHistoryComponent } from './ascb-about-history.component';

describe('AscbAboutHistoryComponent', () => {
  let component: AscbAboutHistoryComponent;
  let fixture: ComponentFixture<AscbAboutHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AscbAboutHistoryComponent]
    });
    fixture = TestBed.createComponent(AscbAboutHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
