import { Product } from './product';
import { Orders } from './order';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn:'root'
})

export class ShoppingCart{
    private _orders:Orders[]=[];

    get orders(){
        return this._orders;
    }
    addToCart(product:Product, selectedSize: string){
        let order = this._orders.find(orders => orders.product.id == product.id);
        if(order && order.size === selectedSize)
        order.quantity += 1;
        else{
            let order = new Orders();
            order.product=product;
            order.size = selectedSize;
            this._orders.push(order)
        }
    }
    subFromCart(product:Product){
        let order = this._orders.find(odr => odr.product.id == product.id );
        if(order){
            order.quantity -=1;
            if(!order.quantity){
                this.removeOrder(order)
            }
        }
    }
    removeOrder(order:Orders){
        let index = this._orders.findIndex (odr => odr.product.id == order.product.id);
        this._orders.splice(index,1);
    }
    
    get total(){
        return this._orders.reduce((acc,odr)=> acc + (odr.quantity * odr.product.price),0)
    }
    
    clear(){
        this._orders=[]
    }
    get totalquantity(){
        return this._orders.reduce((acc,odr)=> acc + odr.quantity ,0)
    }
}