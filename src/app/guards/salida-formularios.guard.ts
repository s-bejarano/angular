import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export interface OnExit {

  OnExit: () =>  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

@Injectable({
  providedIn: 'root'
})
export class SalidaFormulariosGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: OnExit,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //  const rta = confirm("Estas seguro que deseas salir?");

    return component.OnExit ? component.OnExit() : true;
  }
  
}
