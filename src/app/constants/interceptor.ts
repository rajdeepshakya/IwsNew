import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, timeout } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    constructor(
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!window.navigator.onLine) {
            // if there is no internet, throw a HttpErrorResponse error
            // since an error is thrown, the function will terminate here
            // return new HttpErrorResponse({ error: 'Internet is required.' });
            // this.toastr.error('You have No internet Connection.')
            return throwError(() => {return new HttpErrorResponse({ error: 'Internet is required.' })})
        }else{
            /*Fetching the token from the localStorage and adding in Authorisation Headers */
          //  let apiToken = this.storageService.getItem('access_token');
            
            // this.loader.start();
            if (!request.headers.has('Content-Type')) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }
            if (!request.headers.has('Accept')) {
                request = request.clone({ headers: request.headers.set('Accept', '*/*') });
            }
            if (!request.headers.has('Access-Control-Allow-Origin')) {
                request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });
            }
           
           // console.log('request--->>>', request);
            // this.loader.stop();
            return next.handle(request).pipe(
                timeout(25000),
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                       // console.log('response--->>>', event);
                    }
                    // this.loader.stop();
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                   // console.log('error----->>>>', error)
                    if (error.message == "Timeout has occurred") {
                        // this.toastr.error(error.message);
                       // this.authService.logout();
                    }else {
                        if (error.status == 403 || error.status == 401 || error.status == 0) {
                            // this.toastr.error(error.statusText);
                            // this.authService.logout();
                        }
                        else if(error.error.error_code == 400 && error.error.message.toLowerCase() == "token provided is not valid"){
                            console.log(error);
                            
                           // this.loader.stop();
                            // this.toastr.error(error.error.message);
                           // this.authService.logout()
                        }
                        // if (error.status == 405) {
                        //     this.toastr.error(error.statusText);
                        // }
                    }
                    // this.loader.stop();
                    return throwError(() => {return error;});
                })
            )
        }
    }
}