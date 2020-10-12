import { BaseService } from '../service/base.service';
import { TOWNSHIP_API } from './../model/api_constant';
import { Township } from './../model/division';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class TownshipService extends BaseService<Township>{
    protected getUrl():string{
        return TOWNSHIP_API;
    }
}