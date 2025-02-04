import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../config/url.constans';
@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {
  private baseUrl: string = API_URL;
  private apiKey: string = 'apikey2025';

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

  getUserPortalById(id: string): Observable<any> {
    const url = `${this.baseUrl}/users-portal/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': this.apiKey
    });

    return this.http.get<any>(url, { headers });
  }
}
