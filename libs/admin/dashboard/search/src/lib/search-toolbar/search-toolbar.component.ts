/* eslint-disable @typescript-eslint/no-empty-function */
import { OnDestroy, Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { filter, merge, Observable, Subject as RxjsSubject, take, takeUntil, tap } from 'rxjs';
import { search } from '../+state/dashboard.actions';
import { User } from '../+state/dashboard.models';

import { userQuery } from '../+state/dashboard.selectors';
import { DashboardState } from '../+state/dashboard.state';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'nx-scalio-app-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss'],
})
export class SearchToolbarComponent implements OnInit, AfterViewInit, OnDestroy {
  
  private readonly unsubscribe$ = new RxjsSubject<void>();
  isLoading$ = this.store.pipe(select(userQuery.isLoading));

  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = [ 'avatar_url', 'login', 'type'];

  @ViewChild('paginator')
  paginator!: MatPaginator;

  @ViewChild(MatSort) 
  sort!: MatSort;


  @ViewChild('inputRef')
  inputRef!: ElementRef;
/*
  @ViewChild(MatSort, { static: false })
  set content(sort: MatSort) {
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'login':
          return item.login.toLowerCase();
        default:
          return "";
      }
    };
    console.log("SORT:: ", sort)
    this.dataSource.sort = sort;
  }
*/
  userData$: Observable<User[]> = this.store.pipe(select(userQuery.getUsers));
  searchTermValue = '';
  TOTAL = 0;
  PAGE_SIZE = 9;
  PAGE_INDEX = 1;
  SORT = 'asc';
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent!: PageEvent;
  sortedData!: User[];
  constructor(private store: Store<DashboardState>) {}

  ngOnInit(): void {
    this.subscribeToSearch();
  }
  ngAfterViewInit() {
      console.log("ngafter view init")
      this.inputRef.nativeElement.focus();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  
  sortData(sort: Sort) {
     
     const data = this.sortedData.slice();
     console.log(data)

    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'login':
          return compare(a.login, b.login, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource = new MatTableDataSource(data);
  }
  private subscribeToSearch = (): void => {
    this.store
      .pipe(
          takeUntil(this.unsubscribe$), select(userQuery.getUserData))
      .pipe(
          filter((data) => !!data))
      .subscribe((data) => {
          this.TOTAL = data.total_count;
          this.sortedData = data.items;
          this.dataSource = new MatTableDataSource(data.items);
      });
  };
  private initialiseData = (data: Array<User>): void => {
    this.dataSource = new MatTableDataSource(data);
    if (this.searchTermValue) {
      this.handleSearch(this.searchTermValue);
    }
  };

  onPaginateChange(event: { pageIndex: number; pageSize: number; }) {
    this.PAGE_INDEX = event.pageIndex + 1;
    this.PAGE_SIZE = event.pageSize;
    
    this.store.dispatch(search({
      q: this.searchTermValue,
      page: this.PAGE_INDEX,
      per_page: this.PAGE_SIZE,
      sort: this.sort.direction
    }));
  }
  
  handleSearch(searchText: string): void {
    console.log(searchText, this.inputRef);
    if(searchText) {
      this.searchTermValue = searchText;
      this.PAGE_INDEX = 1;
      if(this.paginator) {
        this.paginator.firstPage();
      }
      this.store.dispatch(search({
        q: searchText,
        page: this.PAGE_INDEX,
        per_page: this.PAGE_SIZE,
        sort: this.SORT
      }));

    } else {
      alert("Please enter text to search");
      this.inputRef.nativeElement.focus();
      console.log(this.inputRef.nativeElement.searchTermValue)
    }
    
  }
  
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
 
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}