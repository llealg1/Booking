import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private baseUrl: string = 'https://arcadia-viajes.com:3001'
  private apiKey: string = 'apikey123'
  private readonly authSessionKey = 'Bearer_auth_arcadia'

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.session}`,
      'Content-Type': 'application/json',
    }),
  }

  private extractData(res: any) {
    let body = res
    return body || [] || {}
  }

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  get session(): string {
    return this.cookieService.get(this.authSessionKey)
  }

  getOrders(financed: boolean = false) {
    return this.httpClient.get(`${this.baseUrl}/order-web?financed=${financed}`, this.httpOptions);
  }
}
