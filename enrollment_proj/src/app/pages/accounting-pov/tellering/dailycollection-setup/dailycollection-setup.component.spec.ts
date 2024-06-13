import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailycollectionSetupComponent } from './dailycollection-setup.component';

describe('DailycollectionSetupComponent', () => {
  let component: DailycollectionSetupComponent;
  let fixture: ComponentFixture<DailycollectionSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailycollectionSetupComponent]
    });
    fixture = TestBed.createComponent(DailycollectionSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
