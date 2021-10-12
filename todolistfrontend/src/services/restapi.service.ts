import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {errorHandler} from '../app/utils/util';
import {catchError} from 'rxjs/operators'

const headers = {
  headers: new HttpHeaders().set('Content-Type', 'application/json'),
};

@Injectable({
  providedIn: 'root',
})

export class RestapiService {
  constructor(private http: HttpClient) {
  }

  /**
   * Get HTTP Request
   * @param url URL to call the HTTP
   * @returns Observable of Specefied Type
   */

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(catchError(errorHandler));
  }

  /**
   * Post HTTP Request
   * @param url URL to call the HTTP
   * @returns Observable of Specefied Type
   */
  public post<T>(url: string, dados: any): Observable<T> {
    return this.http
      .post<T>(url, dados, headers)
      .pipe(catchError(errorHandler));
  }

  /**
   * Put HTTP Request
   * @param url URL to call the HTTP
   * @returns Observable of Specefied Type
   */
  public put<T>(url: string, dados: any): Observable<T> {
    return this.http.put<T>(url, dados, headers).pipe(catchError(errorHandler));
  }


}
