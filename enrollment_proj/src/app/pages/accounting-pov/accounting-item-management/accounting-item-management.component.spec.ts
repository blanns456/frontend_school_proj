import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingItemManagementComponent } from './accounting-item-management.component';

describe('AccountingItemManagementComponent', () => {
  let component: AccountingItemManagementComponent;
  let fixture: ComponentFixture<AccountingItemManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingItemManagementComponent]
    });
    fixture = TestBed.createComponent(AccountingItemManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
