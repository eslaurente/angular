import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthService } from "app/services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(['/error-login']);
      return false;
    }
  }
}
