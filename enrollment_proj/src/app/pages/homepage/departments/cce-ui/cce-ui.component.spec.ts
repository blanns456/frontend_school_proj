import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CceUiComponent } from './cce-ui.component';

describe('CceUiComponent', () => {
  let component: CceUiComponent;
  let fixture: ComponentFixture<CceUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CceUiComponent]
    });
    fixture = TestBed.createComponent(CceUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
