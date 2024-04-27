import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAscComponent } from './history-asc.component';

describe('HistoryAscComponent', () => {
  let component: HistoryAscComponent;
  let fixture: ComponentFixture<HistoryAscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryAscComponent]
    });
    fixture = TestBed.createComponent(HistoryAscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
