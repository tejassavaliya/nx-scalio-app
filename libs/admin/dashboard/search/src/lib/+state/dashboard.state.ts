import { User, UserResponse } from "./dashboard.models";

export interface DashboardState {
    userData: UserResponse;
    isLoading: boolean; 
    error: undefined; 
    users: User[];
    userTotalCount: number;
  }

export const initialDashboardState: DashboardState = {
  userData: {
    total_count: 0,
    incomplete_results: false,
    items: new Array<User>(),
  },
  isLoading: false, 
  error: undefined,
  users: new Array<User>(),
  userTotalCount: 0,
  
}

export const DASHBOARD_FEATURE_KEY = 'dashboard';