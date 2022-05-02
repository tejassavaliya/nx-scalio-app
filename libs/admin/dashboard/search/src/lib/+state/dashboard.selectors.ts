import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState, DASHBOARD_FEATURE_KEY } from './dashboard.state';

const getDashboardState = createFeatureSelector<DashboardState>(DASHBOARD_FEATURE_KEY);

export const isLoading = createSelector(
  getDashboardState,
  (state: DashboardState) =>
    state.isLoading
);

export const getUserData = createSelector(
  getDashboardState,
  (state: DashboardState) => state.userData
);
export const getUsers = createSelector(
  getDashboardState,
  (state: DashboardState) => state?.userData?.items
);

export const getUsersTotalCount = createSelector(
  getDashboardState,
  (state: DashboardState) => state.userData.total_count
);

export const userQuery  = {
  isLoading,
  getUsers,
  getUserData,
  getUsersTotalCount
}  
/*
// Lookup the 'Dashboard' feature state managed by NgRx
export const getDashboardState = createFeatureSelector<State>(
  DASHBOARD_FEATURE_KEY
);

const { selectAll, selectEntities } = dashboardAdapter.getSelectors();

export const getDashboardLoaded = createSelector(
  getDashboardState,
  (state: State) => state.loaded
);

export const getDashboardError = createSelector(
  getDashboardState,
  (state: State) => state.error
);

export const getAllDashboard = createSelector(
  getDashboardState,
  (state: State) => selectAll(state)
);

export const getDashboardEntities = createSelector(
  getDashboardState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDashboardState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getDashboardEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
*/

