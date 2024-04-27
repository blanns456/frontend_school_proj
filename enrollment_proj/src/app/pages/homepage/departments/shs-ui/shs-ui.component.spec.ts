import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShsUiComponent } from './shs-ui.component';

describe('ShsUiComponent', () => {
  let component: ShsUiComponent;
  let fixture: ComponentFixture<ShsUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShsUiComponent]
    });
    fixture = TestBed.createComponent(ShsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
