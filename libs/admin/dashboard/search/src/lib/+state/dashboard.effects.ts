import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';

import * as DashboardActions from './dashboard.actions';
import { UserResponse } from './dashboard.models';
import { DashboardState } from './dashboard.state';

@Injectable()
export class DashboardEffects {

  search$ = createEffect(() => this.actions$.pipe(
      ofType(DashboardActions.search),
      mergeMap((action) =>
      this.dashboardService.getUserData(action.q, action.page, action.per_page, action.sort).pipe(
        map(
          (userData: UserResponse) => {
            
            return DashboardActions.searchSuccess({ userData })
          }
        ),
        catchError((error: any) => of(DashboardActions.searchFailure({ error })))
      )
    )
  ));

  
  constructor(
    private readonly actions$: Actions, 
    private readonly dashboardService: DashboardService,
    private store: Store<DashboardState>,
  ) {}
}
