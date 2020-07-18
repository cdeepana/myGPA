import { TestBed } from '@angular/core/testing';

import { HeaderInitializationInterceptor } from './header-initialization.interceptor';

describe('HeaderInitializationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeaderInitializationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeaderInitializationInterceptor = TestBed.inject(HeaderInitializationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
