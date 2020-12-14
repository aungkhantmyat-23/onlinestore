import {CommonUtils} from './../../common/common-util';
import {UploadService} from './../../service/upload.service';
import {ProductService} from './../../service/product.service';
import {Product} from './../../model/product';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormControl, Validators, FormBuilder, Form} from '@angular/forms';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  product: Product;
  categories = ['Category 1', 'Category 2', 'Category 3'];
  isEdit = false;
  images: string[] = [];

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
              private productService: ProductService, private uploadService: UploadService) {
  }

  ngOnInit(): void {
    this.initForm();

    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id)
          this.productService.findById(+id).subscribe(
            product => {
              this.product = product;
              this.images = product.photo;
              this.initForm();
            }
          )
      }
    )
  }

  get getOtherForm() {
    return this.productForm.get('others') as FormArray;
  }

  addOthers() {
    this.getOtherForm.push(this.fb.group({
      'otherName': this.fb.control(''),
      'otherDesc': this.fb.control('')
    }));
  }

  removeOthers(index: number) {
    this.getOtherForm.removeAt(index);
  }

  get sizes() {
    return this.productForm.get('sizes') as FormArray;
  }

  addSize() {
    this.sizes.push(this.fb.control(''));
  }

  removeSize(index) {
    this.sizes.removeAt(index);
  }

  preview(files: File[]) {
    this.images = [];
    [...files].forEach(file => this.upload(file));
  }

  upload(file: File) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => this.images.push(
      reader.result as string
    );
  }

  save(files: File[]) {
    let product = this.productForm.value;
    product.others = CommonUtils.mapToObj(product.others);

    if (this.product) {
      product.id = this.product.id;
    }
    this.uploadService.upload(files).pipe(
      switchMap(
        photos => {
          product.photo = photos;
          return this.productService.save(product);
        }
      )
    ).subscribe(responseData => {
      this.productForm.reset();
      this.router.navigate(['/home']);
    });
  }


  private initForm() {
    this.productForm = this.fb.group({
      'name': this.fb.control(this.product?.name || '', [Validators.required]),
      'category': this.fb.control(this.product?.category || ''),
      'price': this.fb.control(this.product?.price || 0, [Validators.required]),
      'sizes': this.fb.array([]),
      'others': this.fb.array(
       [...Object.keys(this.product?.others || {}).map(key => this.fb.group({
          'otherName': this.fb.control(key, [Validators.required]),
          'otherDesc': this.fb.control(this.product?.others[key], [Validators.required])
        }))]
      ),
      'description': this.fb.control(this.product?.description || '', [Validators.required])
    });

    if (this.product){
      this.product?.sizes.forEach(size => this.sizes.push(this.fb.control(size, [Validators.required])))
    }
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
