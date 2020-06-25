import { TestBed } from '@angular/core/testing';

import { TestingApiService } from './testing-api.service';

describe('TestingApiService', () => {
  let service: TestingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
