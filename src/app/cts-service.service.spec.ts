import { TestBed, inject } from '@angular/core/testing';

import { CtsServiceService } from './cts-service.service';

describe('CtsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtsServiceService]
    });
  });

  it('should be created', inject([CtsServiceService], (service: CtsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
