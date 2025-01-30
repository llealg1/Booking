import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private baseUrl: string = 'https://arcadia-viajes.com:3001';
  private apiKey: string = '80a123-37e1c0';
  private readonly authSessionKey = 'Bearer_auth_arcadia';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.session}`,
      'Content-Type': 'application/json',
    }),
  };

  private extractData(res: any) {
    let body = res;
    return body || [] || {};
  }

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  get session(): string {
    return this.cookieService.get(this.authSessionKey);
  }

  getOrders(financed: boolean = false, page: number = 1, limit: number = 10) {
    return this.httpClient.get(`${this.baseUrl}/order-web?${financed ? 'financed=true' : 'noFinanced=true'}&page=${page}&limit=${limit}`, this.httpOptions);
  }

  getOrdersById(id: string) {
    return this.httpClient.get(`${this.baseUrl}/order-web/${id}`, this.httpOptions);
  }

  openPdfInNewWindow(order: { createdAt: string; fileUrl: string; id: number; trackerId: number }) {
    const pdfUrl = `${order.fileUrl}`;
    window.open(pdfUrl, '_blank');
  }
}
