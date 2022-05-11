import { Any } from '@scalio/utility';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { Observable, throwError } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { DashboardService } from '../services/dashboard.service';
import { DashboardEffects } from './dashboard.effects';
import { initialDashboardState } from './dashboard.state';
import * as FromActions from './dashboard.actions';

describe('DashboardEffects', () => {

  const initialState = { DASHBOARD_FEATURE_KEY: initialDashboardState };

  const dashboardHttpService = {
    search$: jest.fn(),
  };

  let actions: Observable<Action>;
  let effects: DashboardEffects;

  
  // let store: MockStore<any>;
  let testScheduler: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DashboardEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: DashboardService, useValue: dashboardHttpService },
      ],
    });

    effects = TestBed.inject(DashboardEffects);
    // store = TestBed.inject(MockStore);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should create effects', () => {
    expect(effects).toBeTruthy();
  });

  it('should search and get response', () => {
    const action = FromActions.search({
      q: Any.randomString(),
      page: Any.randomInteger(), 
      per_page: Any.randomInteger(),
      sort: Any.randomString()
    });
    const outcome = FromActions.searchSuccess({
      userData: {
        total_count: 0,
        incomplete_results: false,
        items: [{
          "login": Any.randomString(),
          "id": Any.randomInteger(),
          "node_id": Any.randomString(),
          "avatar_url": Any.randomString(),
          "gravatar_id": Any.randomString(),
          "url": Any.randomString(),
          "html_url": Any.randomString(),
          "followers_url": Any.randomString(),
          "following_url": Any.randomString(),
          "gists_url": Any.randomString(),
          "starred_url": Any.randomString(),
          "subscriptions_url": Any.randomString(),
          "organizations_url": Any.randomString(),
          "repos_url": Any.randomString(),
          "events_url": Any.randomString(),
          "received_events_url": Any.randomString(),
          "type": Any.randomString(),
          "site_admin": false,
          "score": Any.randomInteger(),
        }]
      }
    });

    
    
  });
});
