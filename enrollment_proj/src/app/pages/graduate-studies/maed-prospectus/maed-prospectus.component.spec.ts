import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaedProspectusComponent } from './maed-prospectus.component';

describe('MaedProspectusComponent', () => {
  let component: MaedProspectusComponent;
  let fixture: ComponentFixture<MaedProspectusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaedProspectusComponent]
    });
    fixture = TestBed.createComponent(MaedProspectusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
