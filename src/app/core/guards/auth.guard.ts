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
): Observable<boolean> => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  return authenticationService.authMe().pipe(
    map((user) => {
      if (user) {
        return true;
      } else {
        router.navigate(['/auth/sign-in']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/auth/sign-in']);
      return of(false);
    })
  );
};
