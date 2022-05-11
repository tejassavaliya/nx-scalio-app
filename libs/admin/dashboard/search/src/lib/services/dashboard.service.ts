import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { UserResponse } from '../+state/dashboard.models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BASE_URL = 'https://api.github.com/search/users';
  constructor(private httpClient: HttpClient,
              private _snackBar: MatSnackBar
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
