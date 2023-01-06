import { TestBed } from '@angular/core/testing';

import { MachinesService } from './machine.services';

describe('MachinesService', () => {
  let service: MachinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
