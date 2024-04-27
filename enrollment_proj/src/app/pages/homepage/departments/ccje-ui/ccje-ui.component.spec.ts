import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcjeUiComponent } from './ccje-ui.component';

describe('CcjeUiComponent', () => {
  let component: CcjeUiComponent;
  let fixture: ComponentFixture<CcjeUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcjeUiComponent]
    });
    fixture = TestBed.createComponent(CcjeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
