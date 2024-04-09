import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenKey = 'token'; // Change this if your token key is different
    const token = localStorage.getItem(tokenKey);
    console.log(`Token from localStorage[${tokenKey}]:`, token);

    const modifiedReq = token ? req.clone({
      headers: req.headers
        .set('Accept', 'application/vnd.api+json')
        .set('Content-Type', 'application/vnd.api+json')
        .set('Authorization', `Bearer ${token}`)
    }) : req;

    return next.handle(modifiedReq);
  }
}
