import { User } from '@core/models/auth.model'
import { createAction, props } from '@ngrx/store'

// login action
export const login = createAction(
  '[Authentication] Login',
  props<{ username: string; password: string }>()
)
export const loginSuccess = createAction(
  '[Authentication] Inicio de sesion exitoso',
  props<{ user: User }>()
)
export const loginFailure = createAction(
  '[Authentication] Error Al inicio de sesion',
  props<{ error: string }>()
)

// logout action
export const logout = createAction('[Authentication] Logout')

export const logoutSuccess = createAction('[Auth] Logout Success')
