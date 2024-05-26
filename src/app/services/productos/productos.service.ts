import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductosModel } from '../../models/producto.models';
import { environment } from '../../../environments/environment.development';
import { CrearProductoInterface } from '../../core/interface/products.interface';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private httpClient: HttpClient) {}

  getProductos() {
    return this.httpClient
      .get<{ ok: boolean; productos: ProductosModel[] }>(
        `${base_url}/producto`
      )
      .pipe(map((respuesta) => respuesta.productos));
  }

  crearProductos(producto: CrearProductoInterface){
    return this.httpClient.post(`${base_url}/producto`, producto)
  }
}
