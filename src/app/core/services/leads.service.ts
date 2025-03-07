import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'
import { API_URL } from '../config/url.constans'
@Injectable({
  providedIn: 'root',
})
export class LeadsService {
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

  getLeads(page: number = 1, limit: number = 1000) {
    return this.httpClient.get(
      `${this.baseUrl}/contact?page=${page}&limit=${limit}`,
      this.httpOptions
    )
  }
}
