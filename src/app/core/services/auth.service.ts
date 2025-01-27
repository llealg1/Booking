import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { User } from '@core/models/auth.model';
import { CookieService } from 'ngx-cookie-service';
import { API_URL } from '../config/url.constans';
import { Observable, throwError } from 'rxjs';
import { AuthenticationState } from '@/app/store/authentication/authentication.reducer';
import { Store } from '@ngrx/store';
import { loginSuccess, logout } from '@/app/store/authentication/authentication.actions';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: User | null = null;
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json',
    })
  };

  private extractData(res: any) {
    let body = res;
    return body || [] || {};
  }

  public readonly authSessionKey = 'Bearer_auth_arcadia';

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private store: Store<AuthenticationState>,
    private router: Router
  ) {
    // this.validateToken(); // Validar el token al iniciar
  }

  // Login and Signup methods
  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${API_URL}/auth/login`, { username, password }).pipe(
      map((user) => {
        // login successful if there's a jwt token in the response
        this.user = user;
        this.cookieService.set(this.authSessionKey, user.access_token);
        return user;
      })
    );
  }


  logout() {
    return this.http.delete(`${API_URL}/auth/logout`, this.httpOptions).pipe(
    map(() => {
      this.store.dispatch(logout())
      this.cookieService.delete(this.authSessionKey)
      this.router.navigate(['/home'])

    }))
  }

  signup(data: any): Observable<any> {
    let params = JSON.stringify(data);
    return this.http.post(`${API_URL}/customers/register`, params, this.httpOptions).pipe(
      map(this.extractData),
      catchError(error => {
        console.error('Problema de entrega:', error);
        return throwError(() => new Error('¡Ups! Algo salió mal. Inténtalo de nuevo más tarde.'));
      })
    );
  }

  // AuthMe method
  authMe(): Promise<any> {
    return this.http.get<User>(`${API_URL}/auth/me`, this.httpOptions).toPromise();
  }

  // Manage the session methods
  get session(): string {
    return this.cookieService.get(this.authSessionKey);
  }

  saveSession(token: string): void {
    this.cookieService.set(this.authSessionKey, token);
  }

  removeSession(): void {
    this.cookieService.delete(this.authSessionKey);
  }

  // Manage the token methods
  getToken(): string | null {
    return this.cookieService.get(this.authSessionKey) || null;
  }

  deleteToken(): void {
    this.cookieService.delete(this.authSessionKey, '/');
  }

  isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTimestamp = Math.floor(new Date().getTime() / 1000);
      return payload.exp < currentTimestamp;
    } catch {
      return true; // Si el token no es válido, se considera expirado
    }
  }

  async validateToken(): Promise<void> {
    const token = this.getToken();
    if (token && this.isTokenExpired(token)) {
      this.store.dispatch(logout());
      this.deleteToken();
    } else {
      try {
        const user = await this.authMe();
        this.store.dispatch(loginSuccess({ user }));
      } catch (err) {
        this.store.dispatch(logout());
      }
    }
  }
}
