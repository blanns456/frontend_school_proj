import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingViewuserComponent } from './accounting-viewuser.component';

describe('AccountingViewuserComponent', () => {
  let component: AccountingViewuserComponent;
  let fixture: ComponentFixture<AccountingViewuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingViewuserComponent]
    });
    fixture = TestBed.createComponent(AccountingViewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
