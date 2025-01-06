import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl: string = 'https://arcadia-viajes.com:3001'
  private apiKey: string = 'apikey123'

  constructor(private http: HttpClient) {}
  getCountry(): Observable<any> {
    const url = `${this.baseUrl}/country`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': this.apiKey,
    })

    return this.http.get<any>(url, { headers })
  }
}
