
import { createReducer, on, Action } from '@ngrx/store';

import * as DashboardActions from './dashboard.actions';
import { DashboardState, initialDashboardState } from './dashboard.state';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

// export interface State extends EntityState<DashboardEntity> {
//   selectedId?: string | number; // which Dashboard record has been selected
//   loaded: boolean; // has the Dashboard list been loaded
//   error?: string | null; // last known error (if any)
// }

// export interface DashboardPartialState {
//   readonly [DASHBOARD_FEATURE_KEY]: State;
// }

// export const dashboardAdapter: EntityAdapter<DashboardEntity> =
//   createEntityAdapter<DashboardEntity>();

// export const initialState: State = dashboardAdapter.getInitialState({
//   // set initial required properties
//   action: DashboardActions,
//   loaded: false,
//   users: undefined,
//   searchResult: undefined
// });

const reducer = createReducer(
  initialDashboardState,
  

  on(DashboardActions.search, (state) => ({
    ...state,
    isLoading: true,
    error: undefined,
  })),

  on(DashboardActions.searchSuccess, (state, {userData}) => ({
    ...state,
    isLoading: false,
    userData
  })),

  
  on(DashboardActions.getuserTotalCount, (state, {userTotalCount}) => ({
    ...state,
    userTotalCount
  })),

  on(DashboardActions.searchFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,

  })),

);

export function dashboardReducer(state: DashboardState | undefined, action: Action) {
  return reducer(state, action);
}
