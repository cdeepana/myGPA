/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Event_emitterCustomService } from './event_emitterCustom.service';

describe('Service: Event_emitterCustom', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Event_emitterCustomService]
    });
  });

  it('should ...', inject([Event_emitterCustomService], (service: Event_emitterCustomService) => {
    expect(service).toBeTruthy();
  }));
});
