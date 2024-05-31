import { TestBed } from '@angular/core/testing';

import { TrimesterService } from './trimester.service';

describe('TrimesterService', () => {
  let service: TrimesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrimesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
