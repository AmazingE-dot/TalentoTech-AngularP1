import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductosModel } from '../../core/models/producto.models';
import { environment } from '../../../environments/environment.development';
import { CrearProductoInterface } from '../../core/interface/products.interface';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private httpClient: HttpClient) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token,
      },
    };
  }

  getProductos() {
    return this.httpClient
      .get<{ ok: boolean; productos: ProductosModel[] }>(
        `${base_url}/producto`,
        this.headers
      )
      .pipe(map((respuesta) => respuesta.productos));
  }

  getUnProductos(id: string) {
    return this.httpClient
      .get<{ ok: boolean; producto: ProductosModel[] }>(
        `${base_url}/producto/${id}`,
        this.headers
      )
      .pipe(map((respuesta) => respuesta.producto));
  }

  crearProductos(producto: CrearProductoInterface) {
    return this.httpClient.post(`${base_url}/producto`, producto, this.headers);
  }

  actualizarProductos(producto: ProductosModel) {
    return this.httpClient.put(`${base_url}/producto/${producto._id}`,
    producto,
    this.headers);
  }

  eliminarProductos(id: string) {
    return this.httpClient.delete(`${base_url}/producto/${id}`, this.headers);
  }
}
