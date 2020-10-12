import { AuthService } from './../../service/auth.service';
import { Invoice } from './../../model/invoice';
// import { InvoiceService } from './../../service/invoice.service';
import { Router } from '@angular/router';
import { ShoppingCart } from './../../model/shoppingcart';
import { Orders } from './../../model/order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders:Orders[];

  constructor(public shoppingCart:ShoppingCart,
    private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.orders =this.shoppingCart.orders
  }
  // checkOut(){
  //   if(!this.authService.isLogin){
  //     this.authService.url = this.router.url
  //     this.router.navigate(['/login'])
  //     return;
  //   }
  //   let invoice = new Invoice();
  //   invoice.orders =this.shoppingCart.orders;
  //   invoice.subTotal = this.shoppingCart.subTotal;
  //   invoice.total = this.shoppingCart.total;

  //   this.invoiceService.save(invoice).subscribe(
  //     inv => {
  //       this.shoppingCart.clear();
  //       this.router.navigate(['/invoice',inv.id])
  //     }
  //   )
  // }
}
