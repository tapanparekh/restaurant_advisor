import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  private token: string = '34303304-5475-4d63-9352-0d24ed631b37';

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    httpRequest = httpRequest.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    })

    return next.handle(httpRequest);
  }
}