import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaedFinanceComponent } from './maed-finance.component';

describe('MaedFinanceComponent', () => {
  let component: MaedFinanceComponent;
  let fixture: ComponentFixture<MaedFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaedFinanceComponent]
    });
    fixture = TestBed.createComponent(MaedFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
