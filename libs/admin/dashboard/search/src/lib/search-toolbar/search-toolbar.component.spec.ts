// import { Any } from '@scalio/utility';

import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as FromStore from '../+state/dashboard.state';
import { SearchToolbarComponent } from './search-toolbar.component';
import { userQuery } from '../+state/dashboard.selectors';
import { User } from '@scalio/search-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminSharedMuiModule } from '@scalio/mui-lib';

describe('SearchToolbarComponent', () => {
  let component: SearchToolbarComponent;
  let fixture: ComponentFixture<SearchToolbarComponent>;

  
  let debugElement: DebugElement;
  let mockStore: MockStore;

  let mockGetUsersSelector: MemoizedSelector<
    FromStore.DashboardState,
    User[]
  >;

  const configureStore = (): void => {
    mockStore = TestBed.inject(MockStore);
    mockGetUsersSelector = mockStore.overrideSelector(
      userQuery.getUsers,
      []
    );
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchToolbarComponent],
      providers: [ provideMockStore()],
      imports: [
        BrowserAnimationsModule,
      
        AdminSharedMuiModule,
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).overrideComponent(SearchToolbarComponent, {
      set: {
        providers: [
          provideMockStore()
        ]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchToolbarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
