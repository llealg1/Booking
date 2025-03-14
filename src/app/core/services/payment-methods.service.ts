import { Injectable } from '@angular/core'
import { API_URL } from '../config/url.constans'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodsService {
  private baseUrl: string = API_URL
  private readonly authSessionKey = 'Bearer_auth_arcadia'

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.session}`,
      'Content-Type': 'application/json',
    }),
  }

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  get session(): string {
    return this.cookieService.get(this.authSessionKey)
  }

  getPaymentMethods(body: any) {
    return this.httpClient.post(`${this.baseUrl}/stripe/create-checkout-session`, body)
  }
}
