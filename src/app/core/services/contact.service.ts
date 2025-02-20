import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl: string = 'https://arcadia-viajes.com:3000';
  private apiKey: string = 'apikey2025';

  constructor(private http: HttpClient) {}

  sendContactForm(contactData: {
    lastName: string;
    name: string;
    email: string;
    phone: string;
    description: string;
    subject: string;
  }): Observable<any> {
    const url = `${this.baseUrl}/contact`;
    return this.http.post(url, contactData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
  }
}
