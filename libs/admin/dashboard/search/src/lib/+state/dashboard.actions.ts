import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from './dashboard.actions.type';
import { DashboardEntity, User, UserResponse } from './dashboard.models';

export const init = createAction('[Dashboard Page] Init');

export const loadDashboardSuccess = createAction(
  '[Dashboard/API] Load Dashboard Success',
  props<{ dashboard: DashboardEntity[] }>()
);

export const loadDashboardFailure = createAction(
  '[Dashboard/API] Load Dashboard Failure',
  props<{ error: any }>()
);



export const search = createAction(
  UserActionTypes.search,
  props<{ 
    q: string, 
    page: number
    per_page: number,
    sort: string }>()
)

export const searchSuccess = createAction(
  UserActionTypes.searchSuccess,
  props<{ userData: UserResponse }>()
)


export const getuserTotalCount = createAction(
  UserActionTypes.getuserTotalCount,
  props<{ userTotalCount: number }>()
)

export const searchFailure = createAction(
  UserActionTypes.searchFail,
  props<{ error: any }>()
)