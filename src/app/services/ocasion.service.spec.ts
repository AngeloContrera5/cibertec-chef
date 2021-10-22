import { TestBed } from '@angular/core/testing';

import { OcasionService } from './ocasion.service';

describe('OcasionService', () => {
  let service: OcasionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcasionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
