import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustfundsItemsComponent } from './trustfunds-items.component';

describe('TrustfundsItemsComponent', () => {
  let component: TrustfundsItemsComponent;
  let fixture: ComponentFixture<TrustfundsItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrustfundsItemsComponent]
    });
    fixture = TestBed.createComponent(TrustfundsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
