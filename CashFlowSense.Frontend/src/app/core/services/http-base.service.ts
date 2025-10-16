import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.production';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpBaseService {
  private http = inject(HttpClient);
  protected baseUrl = environment.apiUrl;

  protected getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    const token = this.getAuthToken();
    
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  // generic GET request
  protected get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}${endpoint}`, {
        headers: this.getHeaders(),
        params,
      })
      .pipe(
        retry(1), // retry 1 time in case network error
        catchError(this.handleError)
      );
  }

  // generic POST request
  protected post<T>(endpoint: string, data: any): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}${endpoint}`, data, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  // generic PUT request
  protected put<T>(endpoint: string, data: any): Observable<T> {
    return this.http
      .put<T>(`${this.baseUrl}${endpoint}`, data, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  // generic DELETE request
  protected delete<T>(endpoint: string): Observable<T> {
    return this.http
      .delete<T>(`${this.baseUrl}${endpoint}`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  // retrive JWT token from localStorage
  private getAuthToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // centralized HTTP error handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Si è verificato un errore soconosciuto';

    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMessage = `Errore: ${error.error.message}`;
    } else {
      // server side error
      switch (error.status) {
        case 400:
          errorMessage = 'Richeista non valida';
          break;
        case 401:
          errorMessage = 'Non autorizzato. Effetua nuovamente il login';
          // qui si potrebbe fare il logout automatico
          break;
        case 403:
          errorMessage = 'Accesso negato';
          break;
        case 404:
          errorMessage = 'Risorsa non trovata';
          break;
        case 500:
          errorMessage = 'Errore interno del server';
          break;
        default:
          errorMessage = `Errore del server: ${error.status}`;
      }
    }

    console.error('HTTP Error:', error);
    return throwError(() => new Error(errorMessage));
  }
}
