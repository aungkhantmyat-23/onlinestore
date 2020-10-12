import { AdminViewComponent } from './admin-view.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { ProductFormComponent } from './product-form/product-form.component';
import { TodayOrdersComponent } from './today-orders/today-orders.component';
import { OrderComponent } from './order/order.component';
import { HistoryComponent } from './history/history.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';

const routes: Routes = [
    {
        path: 'admin-view',
        component: AdminViewComponent,
        children: [
         { path: 'productform', component: ProductFormComponent },
          {path:'listproduct',component:ListofproductsComponent},
          { path: 'todayorder', component: TodayOrdersComponent },
          { path: 'order', component: OrderComponent },
          { path: 'history', component: HistoryComponent },
          { path: 'member-list', component: MemberListComponent },
          { path: ':id/productform',component:ProductFormComponent}
        ],
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule{}