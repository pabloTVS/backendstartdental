import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '@env/environment';
import { Payments } from '@shared/models/payments.interface'


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Payments[]>{
      return this.http.get<Payments[]>(`${environment.API_URL}/paym`)
      .pipe(catchError(this.handlerError));
    }

  handlerError(error): Observable<never> {
    let errorMessage = 'Error desconocido.';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
