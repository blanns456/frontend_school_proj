import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingNavbarComponent } from './accounting-navbar.component';

describe('AccountingNavbarComponent', () => {
  let component: AccountingNavbarComponent;
  let fixture: ComponentFixture<AccountingNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingNavbarComponent]
    });
    fixture = TestBed.createComponent(AccountingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
