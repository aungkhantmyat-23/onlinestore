import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  styleUrls: ['./listofproducts.component.css']
})
export class ListofproductsComponent implements OnInit {

  
  products$: Observable<Product[]>;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.findAll();
  }
  
}
