import { ShoppingCart } from './../../model/shoppingcart';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  selectedSize: string;
  others:String[]=[];
  
  constructor(private route:ActivatedRoute,private router:Router,public shoppingCart:ShoppingCart) { }

  ngOnInit(): void {
    this.product=history.state
    let obj =this.product.others;
    //let siz =this.product.sizes
    Object.keys(obj).forEach(key => this.others.push(`${key}: ${obj[key]}`))
    //Object.keys(siz).forEach(key => this.avliableSizes.push(`${obj[key]}`))
  }
  
  addToCart(product:Product){
    this.shoppingCart.addToCart(product, this.selectedSize)
  }
  onEdit(){
    this.router.navigate([`/admin-view/${this.product.id}/productform`],{relativeTo: this.route})
  }
  
}
