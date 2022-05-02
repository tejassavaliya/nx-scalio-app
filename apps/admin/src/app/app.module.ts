import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpAPIInterceptor } from '@scalio/search-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'admin-dashboard-search',
          loadChildren: () =>
            import('@scalio/search-lib').then(
              (module) => module.AdminDashboardSearchModule
            ),
        },
        { path: '', redirectTo: 'admin-dashboard-search', pathMatch: 'full'}
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAPIInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
