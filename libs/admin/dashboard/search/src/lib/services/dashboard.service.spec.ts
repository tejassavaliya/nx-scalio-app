import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Any } from '@scalio/utility';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;
  let httpMock: HttpTestingController;

  const mockDashboardService = {
    getUserData: jest.fn(),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: DashboardService, useValue: mockDashboardService }],
    });
    service = TestBed.inject(DashboardService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
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
