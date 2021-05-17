import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { viewProducts } from '@shared/models/viewProducts.interface'

@Injectable({
  providedIn: 'root'
})
export class productsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<viewProducts[]>{
    return this.http.get<viewProducts[]>(`${environment.API_URL}/prod`).
    pipe(catchError(this.handlerError));
  }

  getById(productId:number): Observable<viewProducts>{
    return this.http.get<viewProducts>(`${environment.API_URL}/prod/${productId}`).
    pipe(catchError(this.handlerError));
  }

 // updateProducts(productId:number): Observable<viewProducts>

  handlerError(error): Observable<never> {
    let errorMessage = 'Error desconocido';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
