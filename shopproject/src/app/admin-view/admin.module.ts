import { RouterModule } from '@angular/router';

import { AdminViewComponent } from './admin-view.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { HistoryComponent } from './history/history.component';
import { OrderComponent } from './order/order.component';
import { TodayOrdersComponent } from './today-orders/today-orders.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ListofproductsComponent } from './listofproducts/listofproducts.component';


@NgModule({
    declarations: [
        ProductFormComponent,
        TodayOrdersComponent,
        OrderComponent,
        HistoryComponent,
        MemberListComponent,
        AdminViewComponent,
       ListofproductsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ]
})
export class AdminModule{}