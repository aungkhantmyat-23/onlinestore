import { tap, catchError } from 'rxjs/operators';
import { BASE_URL, AUTH_HEADER } from './../model/api_constant';
import { Member } from './../model/member';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AuthService{
    private _token:string;
    private _loginUser:string;
    private _role:string;
    url:string;

    constructor(private http:HttpClient){}

    private _isLogin = false;
    login(member:Member){
        return this.http.post(`${BASE_URL}/login`,member,{
            observe:'events'
        }).pipe(
            tap(
                event => {
                    if(event.type === HttpEventType.Response){
                        let headers  = event.headers;
                        this._token = headers.get(AUTH_HEADER);
                        this._loginUser=headers.get('user');
                        this._role=headers.get('role');
                        this._isLogin=true;
                    }
                }
            ),
            catchError(respErr => throwError(respErr))
        )
    }
    logout(){
        this._token=null;
        this._loginUser=null;
        this._role=null;
        this._isLogin=null;
    }
    get isLogin(){
        return this._isLogin;
    }
    get token(){
        return this._token;
    }
    get role(){
        return this._role;
    }
    get loginUser(){
        return this._loginUser;
    }
}