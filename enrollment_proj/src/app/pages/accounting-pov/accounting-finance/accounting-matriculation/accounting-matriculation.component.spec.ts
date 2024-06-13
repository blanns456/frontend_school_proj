import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingMatriculationComponent } from './accounting-matriculation.component';

describe('AccountingMatriculationComponent', () => {
  let component: AccountingMatriculationComponent;
  let fixture: ComponentFixture<AccountingMatriculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountingMatriculationComponent]
    });
    fixture = TestBed.createComponent(AccountingMatriculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
