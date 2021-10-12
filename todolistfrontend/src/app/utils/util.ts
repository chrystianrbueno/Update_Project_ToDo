import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {environmentProd} from '../../environments/environment.prod';

export const API_URL = environment.apiUrl;
export const API_URL_PROD = environmentProd.apiUrl;

export function errorHandler(err: HttpErrorResponse) {
  let msg = '';
  if (err.error instanceof ErrorEvent) {
    msg = `Client Error Occured: ${err.error.message}`;
  } else {
    msg = `Server Error Occured: ${err.status} ${err.statusText}`;
  }
  return throwError({
    error: err.error,
    message: msg,
    messageDesc: err.message,
  });
}
