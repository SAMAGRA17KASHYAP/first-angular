import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ProductGaurdService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let id = +route.paramMap.get("id");
    if(id >=0 && id <=10){
      return true;
    }
    alert("wrong route");
    return false;
  }
  constructor() { }

}
