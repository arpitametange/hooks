import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):any {
    // return next.handle(request);
    let headers=request.clone({
      setHeaders:{
         'X-RapidAPI-Key': 'a356432fb5msh8cc581faab668ccp1f30e1jsn9f9c0cea3104',
      'X-RapidAPI-Host': 'referential.p.rapidapi.com'
    }
    })
    return next.handle(headers)
}

}
