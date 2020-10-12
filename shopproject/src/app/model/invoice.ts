import { Orders } from './order';

export class Invoice{
    id:number;
    orders:Orders[];
    invoiceDate:string;
    subTotal:number;
    total:number;
}