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
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn') || 'false'),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  error: null,
}

export const authenticationReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, error: null })),
  on(loginSuccess, (state, { user }) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(user));
    return {
      ...state,
      isLoggedIn: true,
      user,
      error: null,
    };
  }),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(logout, (state) => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    return {
      ...state,
      isLoggedIn: false,
      user: null,
      error: null,
    };
  })
);
