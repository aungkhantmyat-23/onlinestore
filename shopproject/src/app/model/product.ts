

export class Product{
    id?:number =0;
    name:string;
    category:string;
    description:string;
    photo:string[];
    price:number;
    quantity:number;
    sizes:string[];
    others:{[key:string]:string};
    soldOut:boolean;
    
}