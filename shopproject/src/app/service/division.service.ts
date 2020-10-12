import { DIVISION_API } from './../model/api_constant';
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Division } from "../model/division";



@Injectable({
    providedIn:'root'
})
export class DivisionService extends BaseService<Division>{
    protected getUrl():string{
        return DIVISION_API;
    }
    
}