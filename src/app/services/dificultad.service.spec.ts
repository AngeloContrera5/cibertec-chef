import { TestBed } from '@angular/core/testing';

import { DificultadService } from './dificultad.service';

describe('DificultadService', () => {
  let service: DificultadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DificultadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
