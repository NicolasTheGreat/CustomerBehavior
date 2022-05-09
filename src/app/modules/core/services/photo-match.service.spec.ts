import { TestBed } from '@angular/core/testing';

import { PhotoMatchService } from './photo-match.service';

describe('PhotoMatchService', () => {
  let service: PhotoMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
