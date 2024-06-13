import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingSidebarComponent } from './accounting-sidebar.component';

describe('AccountingSidebarComponent', () => {
  let component: AccountingSidebarComponent;
  let fixture: ComponentFixture<AccountingSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingSidebarComponent]
    });
    fixture = TestBed.createComponent(AccountingSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
