import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubmitgradesComponent } from './view-submitgrades.component';

describe('ViewSubmitgradesComponent', () => {
  let component: ViewSubmitgradesComponent;
  let fixture: ComponentFixture<ViewSubmitgradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSubmitgradesComponent]
    });
    fixture = TestBed.createComponent(ViewSubmitgradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
