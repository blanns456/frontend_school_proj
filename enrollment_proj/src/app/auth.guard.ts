import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.authService.getToken();
    const userRole = this.authService.getUserRole();

    if (token) {
      const allowedRoles = route.data['allowedRoles'] || [];

      if (allowedRoles.length === 0 || allowedRoles.includes(userRole)) {
        return true;
      } else {
        return this.router.createUrlTree(['/access-denied']);
      }
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}
