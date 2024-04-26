import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbaeUiComponent } from './cbae-ui.component';

describe('CbaeUiComponent', () => {
  let component: CbaeUiComponent;
  let fixture: ComponentFixture<CbaeUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CbaeUiComponent]
    });
    fixture = TestBed.createComponent(CbaeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
