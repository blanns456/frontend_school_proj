import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingDashboardLabfeesComponent } from './accounting-dashboard-labfees.component';

describe('AccountingDashboardLabfeesComponent', () => {
  let component: AccountingDashboardLabfeesComponent;
  let fixture: ComponentFixture<AccountingDashboardLabfeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingDashboardLabfeesComponent]
    });
    fixture = TestBed.createComponent(AccountingDashboardLabfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
