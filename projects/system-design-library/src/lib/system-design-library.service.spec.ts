import { TestBed } from '@angular/core/testing';

import { SystemDesignLibraryService } from './system-design-library.service';

describe('SystemDesignLibraryService', () => {
  let service: SystemDesignLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemDesignLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
