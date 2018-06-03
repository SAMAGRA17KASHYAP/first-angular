import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductService{
    _productUrl:string = './api/products/products.json';
    
    constructor(private _http:HttpClient){}

    getProducts():Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data=>console.log("get Products service"+ JSON.stringify(data)))
        .catch(this.handleError);
    }

    handleError(err:HttpErrorResponse){
        console.log('product service handle error'+err);
        return Observable.throw(err);
    }
}