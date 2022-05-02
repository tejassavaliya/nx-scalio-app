/**
 * Interface for the 'Dashboard' data
 */
export interface DashboardEntity {
  id: string | number; // Primary ID
  name: string;
}
export interface UserRequest {
  searchText: string
}
export interface UserData {
  loading: boolean;
  userData: UserResponse;
  error: Error
}
export interface UserResponse {
  total_count: number;
  incomplete_results: boolean
  items: User[]
}
export interface User {
  "login": string;
  "id": number;
  "node_id": string;
  "avatar_url": string;
  "gravatar_id": string;
  "url": string;
  "html_url": string;
  "followers_url": string;
  "following_url": string;
  "gists_url": string;
  "starred_url": string;
  "subscriptions_url": string;
  "organizations_url": string;
  "repos_url": string;
  "events_url": string;
  "received_events_url": string;
  "type": string;
  "site_admin": boolean;
  "score": number
}
