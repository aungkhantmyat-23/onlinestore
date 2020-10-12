import { CommonUtils } from './../../common/common-util';
import { UploadService } from './../../service/upload.service';
import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm:FormGroup
  product:Product;
  categories=['Category 1','Category 2','Category 3']
  isEdit=false;

  images:string[] =[];
  constructor(private router:Router,private route: ActivatedRoute,
    private productService:ProductService,private uploadService:UploadService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        this.product = data['product'];
      }
    )
    this.initForm();
  }
  get getOtherForm(){
    return this.productForm.get('others') as FormArray;
  }
  
  addOthers(){
    this.getOtherForm.push(new FormGroup({
      'otherName':new FormControl(),
      'otherDesc':new FormControl()
    }))
  }
  
  removeOthers(index:number){
    this.getOtherForm.removeAt(index);
  }

  get sizes(){
    return this.productForm.get('sizes') as FormArray;
  }

  addSize(){
    this.sizes.push(new FormControl())
  }

  removeSize(index){
    this.sizes.removeAt(index);
  }

  preview(files:File[]){
   this.images=[];
   [...files].forEach(file => this.upload(file))
  }
  upload(file:File){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => this.images.push(
      reader.result as string
    );
  }

  save(files: File[]){
    let product = this.productForm.value;
    product.others = CommonUtils.mapToObj(product.others);
    
    if(this.product){
      product.id=this.product.id;
    }
    this.uploadService.upload(files).pipe(
      switchMap(
        photos => {
          product.photo = photos;
          return this.productService.save(product)
        }
      )
    ).subscribe(responseData => this.productForm.reset())
  }

  

  private initForm(){
    
    let name='';
    let category=null;
    let quantity =0;
    let price =0;
    let description='';
    let sizes =new FormArray([]);
    let others =new FormArray([]);

    if(this.product){
      
      name=this.product.name;
      category =this.product.category;
      quantity=this.product.quantity;
      price=this.product.price;
      description=this.product.description;
      
      this.product.sizes?.forEach(size => sizes.push(new FormControl(size)))
      

      if(this.product.others){
        for(let[key,value] of CommonUtils.objToMap(this.product.others)){
          others.push(new FormGroup({
            'otherName':new FormControl(key),
            'otherDesc':new FormControl(value)
          }))
        }
      }
      
    }
    this.productForm = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'category': new FormControl(category, [Validators.required]),
      'quantity': new FormControl(quantity, [Validators.required]),
      'price': new FormControl(price, [Validators.required]),
      'sizes':sizes,
      'description': new FormControl(description, [Validators.required]),
      'others': others
    })
  }
  get name() {
    return this.productForm.get('name');
  }
  get category() {
    return this.productForm.get('category');
  }
  get quantity() {
    return this.productForm.get('quantity');
  }
  get price() {
    return this.productForm.get('price');
  }
  get description() {
    return this.productForm.get('description');
  }
  
}
