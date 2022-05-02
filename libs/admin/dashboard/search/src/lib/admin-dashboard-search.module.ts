import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { SearchToolbarComponent } from './search-toolbar/search-toolbar.component';
import { AdminSharedMuiModule } from '@scalio/mui-lib';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './+state/dashboard.reducer';
import { DashboardEffects } from './+state/dashboard.effects';

export const adminDashboardRoutes: Route[] = [
  {
    path: '',
    component: SearchToolbarComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    AdminSharedMuiModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: SearchToolbarComponent },
    ]),
    StoreModule.forFeature(
      fromDashboard.DASHBOARD_FEATURE_KEY,
      fromDashboard.dashboardReducer
    ),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  declarations: [SearchToolbarComponent],
})
export class AdminDashboardSearchModule {}
