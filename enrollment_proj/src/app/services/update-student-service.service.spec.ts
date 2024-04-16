import { TestBed } from '@angular/core/testing';

import { UpdateStudentServiceService } from './update-student-service.service';

describe('UpdateStudentServiceService', () => {
  let service: UpdateStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export { UpdateStudentServiceService };
