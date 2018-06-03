import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../products.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService){

  }

  ratingClicked:string;

  pageTitle:string = "PRODUCT LIST";

  imageBtnText:string="Show Image";

  imageShow:boolean = true;

  _listFilter:string ;

  get listFilter(){
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter):this.products;
  }

  filteredProducts:IProduct[];

  products:IProduct[];

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data)=>{
        this.products = data;
        this.filteredProducts = this.products;    
      }
    );
    this.updateImage();
  }
  updateImage(){
    this.imageShow = !this.imageShow;
    if(this.imageShow){
      this.imageBtnText = "Hide Image";      
    }
    else{
      this.imageBtnText = "Show Image";
    }
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product:IProduct)=> 
       product
      .productName
       .toLocaleLowerCase()
       .indexOf(filterBy)!==-1
      );
  }

  onNotify(data:string){
    this.ratingClicked = data;
  }
}
