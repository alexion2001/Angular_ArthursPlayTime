import { TestBed } from '@angular/core/testing';

import { ContClientService } from './cont-client.service';

describe('ContClientService', () => {
  let service: ContClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
