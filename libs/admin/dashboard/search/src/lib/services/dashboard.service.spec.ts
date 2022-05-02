import { TestBed } from '@angular/core/testing';
// import { Any } from 'libs/admin/shared/utility/src';
export class Any {
  static randomString(): string {
    const radix = 36;

    return (Math.random() + 1).toString(radix).substring(2, 5);
  }

  static randomInteger(min = 1, max = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;
  

  const mockDashboardService = {
    getUserData: jest.fn(),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: DashboardService, useValue: mockDashboardService }],
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get endpoint for get user data', () => {
    const request = {
      q: Any.randomString(),
      page: Any.randomInteger(), 
      per_page: Any.randomInteger(),
      sort: Any.randomString()
    }

    jest.spyOn(mockDashboardService, 'getUserData');

    service.getUserData(
      request.q,
      request.page,
      request.per_page,
      request.sort
    );

    expect(mockDashboardService.getUserData).toHaveBeenCalled();
  });
});
