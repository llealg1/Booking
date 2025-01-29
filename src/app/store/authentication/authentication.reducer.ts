import { User } from '@core/models/auth.model'
import { createReducer, on } from '@ngrx/store'
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
} from './authentication.actions'

export type AuthenticationState = {
  isLoggedIn: boolean
  user: User | null
  error: string | null
}

const initialState: AuthenticationState = {
  isLoggedIn: false,
  user: null,
  error: null,
}

export const authenticationReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, error: null })),
  on(loginSuccess, (state, { user }) => {
    console.log('user', user)
    return {
      ...state,
      user: user,
      isLoggedIn: true,
      error: null,
    };
  }),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(logout, (state) => {
    return {
      isLoggedIn: false,
      user: null,
      error: null,
    };
  })
);
