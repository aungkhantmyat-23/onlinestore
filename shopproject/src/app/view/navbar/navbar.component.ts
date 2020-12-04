import { ShoppingCart } from './../../model/shoppingcart';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public shoppingCart:ShoppingCart,private router: Router,public authService:AuthService) { }

  ngOnInit(): void {
    
    $(document).ready(function() {
      var fixHeight = function() {
        $('.navbar-nav').css(
          'max-height',
          document.documentElement.clientHeight - 150
        );
      };
      fixHeight();
      $(window).resize(function() {
        fixHeight();
      });
      $('.navbar .navbar-toggler').on('click', function() {
        fixHeight();
      });
      $('.navbar-toggler, .overlay').on('click', function() {
        $('.mobileMenu, .overlay').toggleClass('open');
      });
    });
    
    
    $(window).scroll(function(){
       $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
 
        }); 

       
        $('.navTrigger').click(function () {
          $(this).toggleClass('active');
          console.log("Clicked menu");
          $("#mainListDiv").toggleClass("show_list");
          $("#mainListDiv").fadeIn();
      
      });
      
  }
  search(name){
    this.router.navigate(['/products/productlist'], {queryParams: {productName: name}})
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/home'])
  }
}
