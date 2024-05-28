import { ResolveFn } from '@angular/router';
import { ProductosService } from '../../../services/productos/productos.service';
import { inject } from '@angular/core';
import { ProductosModel } from '../../../models/producto.models';

export const productosResolver: ResolveFn<ProductosModel[]> = (route, state) => {
  const productosService = inject(ProductosService);

  return productosService.getProductos()
}
