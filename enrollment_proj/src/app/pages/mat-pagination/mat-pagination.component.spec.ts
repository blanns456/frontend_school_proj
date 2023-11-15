import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPaginationComponent } from './mat-pagination.component';

describe('MatPaginationComponent', () => {
  let component: MatPaginationComponent;
  let fixture: ComponentFixture<MatPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatPaginationComponent]
    });
    fixture = TestBed.createComponent(MatPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
