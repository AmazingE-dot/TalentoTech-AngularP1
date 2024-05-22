import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private httpClient: HttpClient) {}

  getProductos() {
    return this.httpClient.get('http://localhost:4000/api/v1/producto');
  }
}
