import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AviationEdgeService {
  private baseUrl: string = 'https://arcadia-viajes.com:3001';
  private readonly authSessionKey = 'Bearer_auth_arcadia';
    httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.session}`,
        'Content-Type': 'application/json',
      }),
    };
  constructor(private http:HttpClient, private cookieService: CookieService) { }

  get session(): string {
    return this.cookieService.get(this.authSessionKey);
  }

  getInfoFlight(numberFlight:string){
    return this.http.get(`${this.baseUrl}/aviation-edge/timetable?`, this.httpOptions);
  }

}
