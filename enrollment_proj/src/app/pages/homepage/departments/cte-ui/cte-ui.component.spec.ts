import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CteUiComponent } from './cte-ui.component';

describe('CteUiComponent', () => {
  let component: CteUiComponent;
  let fixture: ComponentFixture<CteUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CteUiComponent]
    });
    fixture = TestBed.createComponent(CteUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
