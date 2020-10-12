import { MEMBER_API } from './../model/api_constant';
import { Member } from './../model/member';
import { Injectable } from '@angular/core';
import {BaseService}from './../service/base.service';


@Injectable({
    providedIn:'root'
})

export class MemberService extends BaseService<Member>{
    protected getUrl():string{
        return MEMBER_API;
    }
    activateAccount(token: string){
        return this.http.get<any>(`${MEMBER_API}/activate`,{
            params:{token}
        })
    }
   
    findOne(email:string){
        return this.data.find(m => m.email === email)
    }
}