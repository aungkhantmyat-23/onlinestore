import { FormsModule } from '@angular/forms';
import { TownshipFilterPipe } from './deliver-form/township-filter.pipe';
import { MemberViewComponent } from './member-view.component';
import { MemberViewRoutingModule } from './member-view-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PurchasedItemComponent } from './purchased-item/purchased-item.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { DeliverFormComponent } from './deliver-form/deliver-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    DeliverFormComponent,
    MyOrderComponent,
    ProfileEditComponent,
    PurchasedItemComponent,
    UserProfileComponent,
    MemberViewComponent,
    TownshipFilterPipe,
  ],
  imports: [
    CommonModule,
    MemberViewRoutingModule,
    FormsModule,
  ]
})
export class MemberViewModule { }
