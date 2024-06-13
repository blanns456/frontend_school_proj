import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaedUpdateInformationComponent } from './maed-update-information.component';

describe('MaedUpdateInformationComponent', () => {
  let component: MaedUpdateInformationComponent;
  let fixture: ComponentFixture<MaedUpdateInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaedUpdateInformationComponent]
    });
    fixture = TestBed.createComponent(MaedUpdateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
