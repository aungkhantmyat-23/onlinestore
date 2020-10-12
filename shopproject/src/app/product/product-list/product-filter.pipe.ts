import { Product } from './../../model/product';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'productFilter'
})
export class ProductFilter implements PipeTransform{
    transform(value: Product[],name:string, category: string){
        if(!name && !category) return value;

      let  pred = product => category 
                            ? name 
                            ? product.category == category && product.name.toLowerCase().includes(name.toLowerCase())
                            : product.category == category
                            : name ? product.name.toLowerCase().includes(name.toLowerCase()) : true;

        return value?.filter(pred)
    }
}