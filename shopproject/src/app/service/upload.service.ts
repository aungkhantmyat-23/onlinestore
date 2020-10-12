import { IMAGE_API } from './../model/api_constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, forkJoin } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';




@Injectable({
    providedIn:'root'
})

export class UploadService{

    constructor(private http:HttpClient){}

    upload(files:File[]){
        return forkJoin([...files].map(file => {
            let data =new FormData();
            data.append('file',file);
            return this.http.post(IMAGE_API,data, {responseType: 'text'})
        }))
    }
}