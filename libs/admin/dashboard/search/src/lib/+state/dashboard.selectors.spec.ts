import { UserResponse } from './dashboard.models';

import * as DashboardSelectors from './dashboard.selectors';
import { Any } from '@scalio/utility';
describe('Dashboard Selectors', () => {
  const createBaseAppState = () => ({
    dashboard: {
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
      },
      isLoading: false, 
      error: undefined,
      users: [],
      userTotalCount: 0
    }
    
  });
  
  const expectedUsers: UserResponse = {
    "total_count": 97821,
    "incomplete_results": false,
    "items": [
      {
        "login": "test",
        "id": 383316,
        "node_id": "MDQ6VXNlcjM4MzMxNg==",
        "avatar_url": "https://avatars.githubusercontent.com/u/383316?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/test",
        "html_url": "https://github.com/test",
        "followers_url": "https://api.github.com/users/test/followers",
        "following_url": "https://api.github.com/users/test/following{/other_user}",
        "gists_url": "https://api.github.com/users/test/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/test/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/test/subscriptions",
        "organizations_url": "https://api.github.com/users/test/orgs",
        "repos_url": "https://api.github.com/users/test/repos",
        "events_url": "https://api.github.com/users/test/events{/privacy}",
        "received_events_url": "https://api.github.com/users/test/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      }
    ]
  }

  it('should select the loading status', () => {
    const state = createBaseAppState();
    expect(DashboardSelectors.isLoading(state)).toBe(
      state.dashboard.isLoading);
  });

 

  describe('Dashboard Selectors', () => {
    it('getUserData() should return the list of Dashboard', () => {

      const state1 = {
        dashboard: {
          ...createBaseAppState().dashboard,
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

        }
      }
      expect(DashboardSelectors.getUserData(state1)).toBe(
        state1.dashboard.userData);

    
      

      
    });



    it('getUsers() should return the list of Dashboard', () => {

      const state1 = {
        dashboard: {
          ...createBaseAppState().dashboard,
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
        }
      }
      expect(DashboardSelectors.getUsers(state1)).toBe(
        state1.dashboard.userData.items);
    });

    it('get totla count() should return the list of Dashboard', () => {

      const state1 = {
        dashboard: {
          ...createBaseAppState().dashboard,
          userData: {
            total_count: 1,
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
        }
      }
      expect(DashboardSelectors.getUsersTotalCount(state1)).toBe(
        state1.dashboard.userData.total_count);
    });
    
  });
});

