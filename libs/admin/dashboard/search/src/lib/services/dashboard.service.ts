import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { UserResponse } from '../+state/dashboard.models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // BASE_URL = 'https://api.github.com/search/users?q=test&page=2&per_page=10&sort=dsc';
  BASE_URL = 'https://api.github.com/search/users';
  constructor(private httpClient: HttpClient,
    ) { }

  getUserData = (
    q: string,
    page: number,
    per_page: number,
    sort: string
  ): Observable<UserResponse> => {
    
    const parameters = {
      q,
      page,
      per_page,
      sort
    };
    const queryParams = new HttpParams({ fromObject: parameters }); 

    return this.httpClient.get<UserResponse>(this.BASE_URL, { params: queryParams});
  }

  
}
