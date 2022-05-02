import { async, TestBed } from '@angular/core/testing';
import { AdminDashboardSearchModule } from './admin-dashboard-search.module';

describe('AdminDashboardSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminDashboardSearchModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(AdminDashboardSearchModule).toBeDefined();
  });
});
