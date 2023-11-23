import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingStatementOfAccountsComponent } from './accounting-statement-of-accounts.component';

describe('AccountingStatementOfAccountsComponent', () => {
  let component: AccountingStatementOfAccountsComponent;
  let fixture: ComponentFixture<AccountingStatementOfAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingStatementOfAccountsComponent]
    });
    fixture = TestBed.createComponent(AccountingStatementOfAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
