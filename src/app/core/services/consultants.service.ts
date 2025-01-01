import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {
  private baseUrl: string = 'https://arcadia-viajes.com:3001';
  private apiKey: string = 'apikey123';

  constructor(private http: HttpClient) { }

  getUsersPortal(
    search: string = '',
    statusEnabled: boolean = true,
    limit: number = 10,
    page: number = 1,
    orderDirection: string = 'asc'
  ): Observable<any> {
    const url = `${this.baseUrl}/users-portal`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': this.apiKey
    });

    let params = new HttpParams()
      .set('search', search)
      .set('statusEnabled', statusEnabled.toString())
      .set('limit', limit.toString())
      .set('page', page.toString())
      .set('orderDirection', orderDirection);

    return this.http.get<any>(url, { headers, params });
  }
}
