import { Subscription, Observable } from 'rxjs';
import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare let $: any;
declare let AOS: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productName: string;
  categoryName: string;
  products$: Observable<Product[]>;
  

  private productChangedSubscription:Subscription;
  constructor(private route: ActivatedRoute,private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.products$ = this.productService.findAll();
    this.route.queryParams.subscribe(
      params => {
        this.categoryName = params['category']
        this.productName=params['productName']
      }
    )
    AOS.init()
    
  }
  viewDetail(product:Product){
    this.router.navigate(['/products/detail'],{state:product})
  }
}
