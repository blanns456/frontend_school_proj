import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyconsolidatedReportsComponent } from './dailyconsolidated-reports.component';

describe('DailyconsolidatedReportsComponent', () => {
  let component: DailyconsolidatedReportsComponent;
  let fixture: ComponentFixture<DailyconsolidatedReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyconsolidatedReportsComponent]
    });
    fixture = TestBed.createComponent(DailyconsolidatedReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
