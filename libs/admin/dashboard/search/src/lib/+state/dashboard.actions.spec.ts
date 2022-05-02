import { Any } from '@scalio/utility';
import * as FromActions from './dashboard.actions';
import { UserActionTypes } from './dashboard.actions.type';
import { UserResponse } from './dashboard.models';

describe('Dashboard Actions', () => {

  describe(UserActionTypes.search, () => {
    it('should search request action', () => {
      
      const q = Any.randomString();
      const page = Any.randomInteger();
      const per_page = Any.randomInteger();
      const sort = Any.randomString()
      
      const sut = FromActions.search({ q, page, per_page, sort });
      expect({ ...sut }).toEqual({
        type: UserActionTypes.search,
        q, page, per_page, sort 
      });
    });
  });

  describe(UserActionTypes.searchSuccess, () => {
    it('should search request success action', () => {
      const userData: UserResponse = {
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
      };
      const sut = FromActions.searchSuccess({userData});
      expect({ ...sut }).toEqual({
        type: UserActionTypes.searchSuccess,
        userData
      });
    });
  });
  

});
