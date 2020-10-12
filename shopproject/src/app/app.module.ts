import { AuthInterceptorService } from './view/auth/auth-interception.service';
import { LoginComponent } from './view/auth/login/login.component';
import { SignupComponent } from './view/auth/signup/signup.component';
import { AdminModule } from './admin-view/admin.module';
import { MemberViewModule } from './member-view/member-view.module';
import { ProductModule } from './product/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { HomeComponent } from './view/home/home.component';
import { FooterComponent } from './view/footer/footer.component';
import { NewArrivalComponent } from './view/new-arrival/new-arrival.component';
import { MostbuyitemsComponent } from './view/mostbuyitems/mostbuyitems.component';
import { CartComponent } from './view/cart/cart.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListofproductsComponent } from './admin-view/listofproducts/listofproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NewArrivalComponent,
    MostbuyitemsComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminModule,
    AppRoutingModule,
    MemberViewModule,
    ProductModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
