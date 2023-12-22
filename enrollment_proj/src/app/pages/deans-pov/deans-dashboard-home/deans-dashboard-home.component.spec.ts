import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansDashboardHomeComponent } from './deans-dashboard-home.component';

describe('DeansDashboardHomeComponent', () => {
  let component: DeansDashboardHomeComponent;
  let fixture: ComponentFixture<DeansDashboardHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeansDashboardHomeComponent]
    });
    fixture = TestBed.createComponent(DeansDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
