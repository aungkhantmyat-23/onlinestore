import { Observable } from 'rxjs';
import { ProductService } from './../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
declare let $:any;
declare let AOS:any;
@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {
  
products$: Observable<Product[]>;

  constructor(private route: ActivatedRoute,private productService:ProductService,
	private router:Router) { }

  ngOnInit(): void {
    AOS.init()
	this.products$ = this.productService.findAll();
    var scrollDuration = 2000;
// paddles
var leftPaddle2 = document.getElementsByClassName('left-paddle2');
var rightPaddle2 = document.getElementsByClassName('right-paddle2');
// get items dimensions
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
	return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;

	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
		$(leftPaddle2).addClass('hidden');
		$(rightPaddle2).removeClass('hidden');
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
		$(leftPaddle2).removeClass('hidden');
		$(rightPaddle2).removeClass('hidden');
	} else if (menuPosition >= menuEndOffset) {
		$(leftPaddle2).removeClass('hidden');
		$(rightPaddle2).addClass('hidden');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

});

// scroll to left
$(rightPaddle2).on('click', function() {
	$('.menu').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
});

// scroll to right
$(leftPaddle2).on('click', function() {
	$('.menu').animate( { scrollLeft: '0' }, scrollDuration);
});
  }
  viewDetail(product:Product){
    this.router.navigate(['/products/detail'],{state:product})
  }
}
