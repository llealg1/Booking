import { Inject, Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthenticationService } from '@core/services/auth.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutSuccess,
} from './authentication.actions'

@Injectable()
export class AuthenticationEffects {
  constructor(
    @Inject(Actions) private actions$: Actions,
    private AuthenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(({ username, password }) => {
        return this.AuthenticationService.login(username, password).pipe(
          map((user) => {
            return loginSuccess({ user })
          }),
          catchError((error) => of(loginFailure({ error })))
        )
      })
    )
  )

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      exhaustMap(() => {
        this.AuthenticationService.logout()
        return of(logoutSuccess())
      })
    )
  )


}
