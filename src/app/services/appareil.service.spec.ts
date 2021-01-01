/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppareilService } from './appareil.service';

describe('Service: Appareil', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppareilService]
    });
  });

  it('should ...', inject([AppareilService], (service: AppareilService) => {
    expect(service).toBeTruthy();
  }));
});
