import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailycollectionReportsComponent } from './dailycollection-reports.component';

describe('DailycollectionReportsComponent', () => {
  let component: DailycollectionReportsComponent;
  let fixture: ComponentFixture<DailycollectionReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailycollectionReportsComponent]
    });
    fixture = TestBed.createComponent(DailycollectionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
