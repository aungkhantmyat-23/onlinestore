import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes =[
  {path: 'products', component: ProductComponent,
      children:[
          {path:'productlist',component:ProductListComponent},
          {path:'detail',component: ProductDetailComponent},
          {path:'category/:cId',component: ProductListComponent}
      ]
  },
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
