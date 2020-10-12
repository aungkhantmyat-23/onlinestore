import { AUTH_HEADER } from './../../model/api_constant';
import { Observable } from 'rxjs';
import { AuthService } from './../../service/auth.service';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType, HttpEvent } from "@angular/common/http";

@Injectable()

export class AuthInterceptorService implements HttpInterceptor{
    constructor(private authService:AuthService){};
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let token = this.authService.token;

        if(token){
            const modifyReq = req.clone({
                headers:req.headers.append(AUTH_HEADER,token)
            });
            return next.handle(modifyReq);

        }
        return next.handle(req);
    }
}