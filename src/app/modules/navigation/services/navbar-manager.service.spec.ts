import { TestBed } from '@angular/core/testing';

import { NavbarManagerService } from './navbar-manager.service';

describe('NavbarManagerService', () => {
  let service: NavbarManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
