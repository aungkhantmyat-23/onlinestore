import { AuthService } from './../../service/auth.service';
import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, RouterState } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private router:Router,private authService:AuthService){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean>{
        if(!this.authService.isLogin){
            this.authService.url = state.url;
            return this.router.navigate(['/login'])
        }
        return true;
    }
    canActivateChild(childRoute:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
        return this.canActivate(childRoute,state);
    }
}