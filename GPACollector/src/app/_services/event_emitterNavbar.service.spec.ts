/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Event_emitterNavbarService } from './event_emitterNavbar.service';

describe('Service: Event_emitterNavbar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Event_emitterNavbarService]
    });
  });

  it('should ...', inject([Event_emitterNavbarService], (service: Event_emitterNavbarService) => {
    expect(service).toBeTruthy();
  }));
});
