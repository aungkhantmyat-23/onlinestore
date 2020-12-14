import { AuthService } from './../../service/auth.service';
import { ShoppingCart } from './../../model/shoppingcart';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

declare let $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  selectedSize: string;
  others:String[]=[];

  constructor(private route:ActivatedRoute,private router:Router,public shoppingCart:ShoppingCart,public authService:AuthService,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.product=history.state
    let obj =this.product.others;
    Object.keys(obj).forEach(key => this.others.push(`${key}: ${obj[key]}`))
  }

  addToCart(product:Product){
    this.shoppingCart.addToCart(product, this.selectedSize)
  }
  onEdit(){
    this.router.navigate([`/admin-view/${this.product.id}/productform`],{relativeTo: this.route})
  }

  delete(){
    this.productService.deleteById(this.product.id).subscribe(() => {
      $('#deleteProduct').modal('hide');
      this.router.navigate(['/home'])
    });
    
    
  }
}
