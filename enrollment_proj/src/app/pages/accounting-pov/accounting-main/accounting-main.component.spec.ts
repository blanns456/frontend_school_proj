import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingMainComponent } from './accounting-main.component';

describe('AccountingMainComponent', () => {
  let component: AccountingMainComponent;
  let fixture: ComponentFixture<AccountingMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingMainComponent]
    });
    fixture = TestBed.createComponent(AccountingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
