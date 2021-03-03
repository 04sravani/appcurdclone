import { TestBed } from '@angular/core/testing';

import { CurdsService } from './curds.service';

describe('CurdsService', () => {
  let service: CurdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
