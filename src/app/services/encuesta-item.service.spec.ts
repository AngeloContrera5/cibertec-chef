import { TestBed } from '@angular/core/testing';

import { EncuestaItemService } from './encuesta-item.service';

describe('EncuestaItemService', () => {
  let service: EncuestaItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestaItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
