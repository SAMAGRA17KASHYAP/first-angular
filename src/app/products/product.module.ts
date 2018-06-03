import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpaces } from '../pipes/convertToSpaces.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductGaurdService } from '../services/product-gaurd.service';
import { ProductService } from './products.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'product-list',component:ProductListComponent},
      {path:'product-detail/:id',component:ProductDetailComponent, canActivate: [ProductGaurdService]}
    
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpaces,
    ProductDetailComponent
 
  ],
  providers:[
    ProductGaurdService,
    ProductService
  ]
})
export class ProductModule { }
