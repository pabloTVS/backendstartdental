import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { viewProducts } from '@shared/models/viewProducts.interface'
import { product } from '@shared/models/Products.interface'

@Injectable({
  providedIn: 'root'
})
export class productsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<viewProducts[]>{
    return this.http.get<viewProducts[]>(`${environment.API_URL}/prod`).
    pipe(catchError(this.handlerError));
  }

  getById(Id:number): Observable<viewProducts>{
    return this.http.get<viewProducts>(`${environment.API_URL}/prod/${Id}`).
    pipe(catchError(this.handlerError));
  }

  updateProducts(Id:number, prod:product): Observable<product> {
    return this.http.patch<product>(`${environment.API_URL}/prod/${Id}`,prod).pipe(catchError(this.handlerError))
 }

  handlerError(error): Observable<never> {
    let errorMessage = 'Error desconocido';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
