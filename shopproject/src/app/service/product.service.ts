import { PRODUCT_API } from './../model/api_constant';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Product } from '../model/product';



@Injectable({
    providedIn:'root'
})

export class ProductService extends BaseService<Product>{
    protected getUrl(): string{
        return PRODUCT_API;
    }
    
    findById(id:number){
        return this.http.get<Product>(`${this.getUrl()}/${id}`)
    }
 
}