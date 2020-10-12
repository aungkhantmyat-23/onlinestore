// import { HttpClient } from '@angular/common/http';
// import { Invoice } from './../model/invoice';
// import { Injectable } from '@angular/core';


// @Injectable({
//     providedIn:'root'
// })

// export class InvoiceService{
//     constructor(private http:HttpClient){}

//     private _invoices:Invoice[]=[]

//     save(invoice: Invoice){
//         return this.http.post<Invoice>(`${BASE_API}/invoices`,invoice)
//     }
//     findAll(){
//         return this.http.get<Invoice[]>(`${BASE_API}/invoices`)
//     }
//     findById(id:number){
//         return this.http.get<Invoice>(`${BASE_API}/invoices/${id}`)
//     }
// }