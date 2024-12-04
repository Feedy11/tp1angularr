import { TestBed } from '@angular/core/testing';

import { FadiService } from './fadi.service';

describe('FadiService', () => {
  let service: FadiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
