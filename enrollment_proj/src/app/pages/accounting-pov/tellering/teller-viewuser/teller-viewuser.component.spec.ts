import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerViewuserComponent } from './teller-viewuser.component';

describe('TellerViewuserComponent', () => {
  let component: TellerViewuserComponent;
  let fixture: ComponentFixture<TellerViewuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TellerViewuserComponent]
    });
    fixture = TestBed.createComponent(TellerViewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
