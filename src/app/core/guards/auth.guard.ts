import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthenticationService } from '@core/services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  return authenticationService.validateToken().then(() => {
    const currentUser = authenticationService.session;
    if (currentUser) {
      return true;
    } else {
      router.navigate(['/auth/sign-in']);
      return false;
    }
  }).catch(() => {
    router.navigate(['/auth/sign-in']);
    return false;
  });
};
