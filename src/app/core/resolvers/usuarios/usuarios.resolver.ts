import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { inject } from '@angular/core';

export const usuariosResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(UsuariosService).getUsuarios();
};
