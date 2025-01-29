import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatNaviService {
  private baseUrl: string = 'https://arcadia-viajes.com:3001';
  private apiKey: string = 'apikey123';

  constructor(private http: HttpClient) {}

  postChatNavi(message: string): Observable<any> {
    const url = `${this.baseUrl}/openai-bot`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': this.apiKey,
    });

    return this.http.post<any>(url, { message: message }, { headers });
  }
}
