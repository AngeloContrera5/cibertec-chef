import { TestBed } from '@angular/core/testing';

import { EstiloPlatoService } from './estilo-plato.service';

describe('EstiloPlatoService', () => {
  let service: EstiloPlatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstiloPlatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
