import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if((localStorage.getItem("token")=="SECRET") || (localStorage.getItem("token")=="PREMIUM") || (localStorage.getItem("token")=="ADMIN") ) {
        return true;
      }
      
      return false;
    
  }
  
}
