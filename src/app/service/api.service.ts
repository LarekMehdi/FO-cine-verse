import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  private buildUrl(endpoint: string): string {
    return `${this.apiBaseUrl}/${endpoint}`;
  }

  get<T>(endpoint: string, params?: Record<string, any>): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params ?? {} });
    return this.http.get<T>(this.buildUrl(endpoint), { params: httpParams });
  }

  post<T>(endpoint: string, body?: any): Observable<T> {
    return this.http.post<T>(this.buildUrl(endpoint), body);
  }

  put<T>(endpoint: string, body?: any): Observable<T> {
    return this.http.put<T>(this.buildUrl(endpoint), body);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(this.buildUrl(endpoint));
  }
}
