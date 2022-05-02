/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';




@Injectable()
export class HttpAPIInterceptor implements HttpInterceptor {

  
  constructor(){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                  let errorMsg = '';
                  if (error instanceof HttpErrorResponse) {
                    if (error.error instanceof ErrorEvent) {
                        console.log('This is client side error');
                        errorMsg = `Error: ${error.error.message}`;
                        // this.openSnackBar(errorMsg, JSON.stringify(error.status))
                        
                    } else {
                        console.log('This is server side error');
                        errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                        // this.openSnackBar(errorMsg, JSON.stringify(error.status))
                    }
                    console.log(errorMsg);
                    // this.snackBar.open('Error while saving.', 'close', { 
                    //   duration: 2000, panelClass: 'errorSnack' 
                    // });
                  }
                  return throwError(error.error)
                    
                })
            )
  }

  // openSnackBar(failedMessage: string, failedTitle:string) {
  //   this.snackBar.open(failedMessage, failedTitle, {
  //     duration: 5000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //   });
  // }

  
}
