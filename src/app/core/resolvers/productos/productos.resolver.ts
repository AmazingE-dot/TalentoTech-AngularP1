import { UsuariosService } from './../../../services/usuarios/usuarios.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductosService } from '../../../services/productos/productos.service';
import { inject } from '@angular/core';

export const productosResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(ProductosService).getProductos();
};
