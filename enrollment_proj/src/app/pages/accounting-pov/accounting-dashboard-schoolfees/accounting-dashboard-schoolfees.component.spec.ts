import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingDashboardSchoolfeesComponent } from './accounting-dashboard-schoolfees.component';

describe('AccountingDashboardSchoolfeesComponent', () => {
  let component: AccountingDashboardSchoolfeesComponent;
  let fixture: ComponentFixture<AccountingDashboardSchoolfeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingDashboardSchoolfeesComponent]
    });
    fixture = TestBed.createComponent(AccountingDashboardSchoolfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
