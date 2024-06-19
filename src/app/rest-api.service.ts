import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8082/api/products');
  }

  getProductById(id: any): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8082/api/products/' + id);
  }

  addProduct(product: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:8082/api/products',
      product
    );
  }
  
  addUser(user: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:8082/api/users',
      user
    );
  }
  
  updateProduct(product: any, id : number): Observable<any> {
    console.log("service" , id)
    console.log("service" , product)
    return this.httpClient.put<any>(
      `http://localhost:8082/api/products/${id}`,
      product
    );
  }
  

  deleteProduct(idProduct: any): Observable<any> {
    return this.httpClient.delete<any>(
      `http://localhost:8082/api/products/${idProduct}`
    );
  }
}
