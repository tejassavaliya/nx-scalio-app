import { Any } from '@scalio/utility';

import * as DashboardActions from './dashboard.actions';
import * as FromDashboardState from './dashboard.state';
import { User } from './dashboard.models';
import { dashboardReducer } from './dashboard.reducer';

describe('Dashboard Reducer', () => {
  
  describe(DashboardActions.search.type, () => {
    const request = {
      q: Any.randomString(),
      page: Any.randomInteger(), 
      per_page: Any.randomInteger(),
      sort: Any.randomString()
    }
    const action = DashboardActions.search(request);
    const previousState = FromDashboardState.initialDashboardState;

    it('should set loading to true', () => {
      const state = dashboardReducer(previousState, action);
      expect(state.isLoading).toBe(true);
    });

    it('should set previous error to undefined', () => {
      const state = dashboardReducer(previousState, action);
      expect(state.error).toBe(undefined);
    });

  });


  describe(DashboardActions.searchSuccess.type, () => {
    const response =  {
      total_count: 0,
      incomplete_results: false,
      items: new Array<User>(),
    };
    const action = DashboardActions.searchSuccess({ userData: response});
    const previousState = FromDashboardState.initialDashboardState;

    it('should set loading to false', () => {
      const state = dashboardReducer(previousState, action);
      expect(state.isLoading).toBe(false);
    });

    it('should set previous error to undefined', () => {
      const state = dashboardReducer(previousState, action);
      expect(state.error).toBe(undefined);
    });

    it('should set values from payload', () => {
      const state = dashboardReducer(previousState, action);
      expect(state.userData).toBe(response);
    });

  });

});
