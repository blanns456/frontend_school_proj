import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaedInformationComponent } from './maed-information.component';

describe('MaedInformationComponent', () => {
  let component: MaedInformationComponent;
  let fixture: ComponentFixture<MaedInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaedInformationComponent]
    });
    fixture = TestBed.createComponent(MaedInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
