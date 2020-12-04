import { Subscription, Subject, from } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseService<T> {
    private dataT:T[];
    dataChanged = new Subject<T[]>();
    constructor(protected http:HttpClient) {
        this.findAll();
    }
    protected abstract getUrl():string;

    get data(){
        return this.dataT;
    }
    save(data:T){
        return this.http.post<T>(this.getUrl(),data)
    }
    
    findAll(){
       return this.http.get<T[]>(this.getUrl());
    }
}