import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'

import { User } from '@core/models/auth.model'
import { CookieService } from 'ngx-cookie-service'
import { API_URL } from '../config/url.constans'
import { Observable, throwError } from 'rxjs'
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user: User | null = null
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.session}`,
      'Content-Type': 'application/json',
    })
  };

  private extractData(res: any) {
    let body = res;
    return body || [] || {};
  }

  public readonly authSessionKey = 'Bearer_auth_arcadia'

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  login(username: string, password: string) {
    return this.http.post<User>(`${API_URL}/auth/login`, { username, password }).pipe(
      map((user) => {
          // login successful if there's a jwt token in the response
          this.user = user
          // store user details and jwt in session
          this.cookieService.set(this.authSessionKey, user.access_token,)
        return user
      })
    )
  }

  signup(data: any):Observable<any> {
    let params = JSON.stringify(data)
    return this.http.post(`${API_URL}/customers/register`, params, this.httpOptions).pipe(
      map(this.extractData), catchError ( error => {
        // El control de calidad detecta el problema
        console . error ( 'Problema de entrega:' , error);

        // Envía una nota de disculpa o soluciona el problema
        return  throwError ( () =>  new  Error ( '¡Ups! Algo salió mal. Inténtalo de nuevo más tarde.' ));
      })
    )
  }



  logout(): void {
    // remove user from cookie to log user out
    this.cookieService.delete(this.authSessionKey)
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    this.user = null
  }

  get session(): string {

    return this.cookieService.get(this.authSessionKey)
  }

  saveSession(token: string): void {
    this.cookieService.set(this.authSessionKey, token)
  }

  removeSession(): void {
    this.cookieService.delete(this.authSessionKey)
  }

  authMe(): Observable<any> {
    console.log(
      new HttpHeaders({
        Authorization: `Bearer ${this.session}`,
      })
    )
    return this.http.get(`${API_URL}/auth/me`,this.httpOptions);
  }
}
