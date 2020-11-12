import { TestBed } from '@angular/core/testing';

import { BookServicesService } from './book-services.service';

describe('BookServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookServicesService = TestBed.get(BookServicesService);
    expect(service).toBeTruthy();
  });
});
