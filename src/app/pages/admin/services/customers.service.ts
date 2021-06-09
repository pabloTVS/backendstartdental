import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';


import { environment } from '@env/environment';
import { Customer } from '@shared/models/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${environment.API_URL}/cust`)
    .pipe(catchError(this.handlerError));
  }

  getById(custId: number): Observable<Customer>{
    return this.http.get<Customer>(`${environment.API_URL}/cust/${custId}`)
    .pipe(catchError(this.handlerError))
  }

  new(customer: Customer): Observable<Customer> {
    return this.http
      .post<Customer>(`${environment.API_URL}/cust`, customer)
      .pipe(catchError(this.handlerError));
  }  

  update(custId: number, customer: Customer): Observable<Customer> {
    return this.http
      .patch<Customer>(`${environment.API_URL}/cust/${custId}`, customer)
      .pipe(catchError(this.handlerError));
  }

  delete(custId: number): Observable<{}> {
    return this.http
      .delete<Customer>(`${environment.API_URL}/cust/${custId}`)
      .pipe(catchError(this.handlerError));
  }

  handlerError(error: { message: any; }): Observable<never> {
    let errorMessage = 'Error desconocido.';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
