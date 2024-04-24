import { TestBed } from '@angular/core/testing';

import { ExpressQueryService } from './express-query.service';

describe('ExpressQueryService', () => {
  let service: ExpressQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
