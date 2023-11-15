import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingDashboardHomeComponent } from './accounting-dashboard-home.component';

describe('AccountingDashboardHomeComponent', () => {
  let component: AccountingDashboardHomeComponent;
  let fixture: ComponentFixture<AccountingDashboardHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingDashboardHomeComponent]
    });
    fixture = TestBed.createComponent(AccountingDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
