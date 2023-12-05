import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelleringListComponent } from './tellering-list.component';

describe('TelleringListComponent', () => {
  let component: TelleringListComponent;
  let fixture: ComponentFixture<TelleringListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelleringListComponent]
    });
    fixture = TestBed.createComponent(TelleringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
