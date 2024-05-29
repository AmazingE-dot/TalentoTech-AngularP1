import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductosService } from '../../../services/productos/productos.service';
import { inject } from '@angular/core';
import { ProductosModel } from '../../../models/producto.models';

export const productosResolver: ResolveFn<ProductosModel[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(ProductosService).getProductos();
};
