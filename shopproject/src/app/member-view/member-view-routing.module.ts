import { MemberViewComponent } from './member-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { PurchasedItemComponent } from './purchased-item/purchased-item.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { DeliverFormComponent } from './deliver-form/deliver-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes =[
  {path:'member-view',component:MemberViewComponent,
    children:[
      {path:'profile',component:UserProfileComponent,
        children:[
          {path:'orders',component:MyOrderComponent},
          {path:'purchased-item',component:PurchasedItemComponent},
          {path:'profile-edit',component:ProfileEditComponent},
        ]
      },
      {path:'deliverform',component:DeliverFormComponent}
    ]
  }
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MemberViewRoutingModule { }
