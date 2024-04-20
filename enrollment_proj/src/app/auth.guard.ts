import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) { }

  token: any;
  userRole: string | null = null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token = localStorage.getItem('token');
    this.userRole = localStorage.getItem('role');

    if (this.token) {
      const allowedRoles = route.data['allowedRoles'] || [];

      if (allowedRoles.length === 0 || allowedRoles.includes(this.userRole)) {
        return true;
      } else {
        // Redirect to an error page or any other appropriate route
        return this.router.createUrlTree(['/access-denied']);
      }
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }

  isStudent(): boolean {
    return this.userRole === 'college';
  }

  isRegistrar(): boolean {
    return this.userRole === 'registrar';
  }

  isAccounting(): boolean {
    return this.userRole === 'accounting';
  }

  isDean(): boolean {
    return this.userRole === 'dean';
  }

  isTeacher(): boolean {
    return this.userRole === 'teacher';
  }
}

export const authGuard = (router: Router, authGuard: AuthGuard) => {
  return (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    return authGuard.canActivate(route, state);
  };
};
