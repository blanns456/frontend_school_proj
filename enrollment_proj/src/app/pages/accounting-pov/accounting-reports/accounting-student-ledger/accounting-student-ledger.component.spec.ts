import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingStudentLedgerComponent } from './accounting-student-ledger.component';

describe('AccountingStudentLedgerComponent', () => {
  let component: AccountingStudentLedgerComponent;
  let fixture: ComponentFixture<AccountingStudentLedgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingStudentLedgerComponent]
    });
    fixture = TestBed.createComponent(AccountingStudentLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
