import { inject } from '@angular/core';
import { UsuariosService } from './../../../services/usuarios/usuarios.service';
import { CanActivateFn, Router } from '@angular/router';
import { PATH } from '../../enum/path.enum';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const usuariosService = inject(UsuariosService);
  const router = inject(Router);

  return usuariosService.valdiateToken().pipe(
    tap((isAutenticado) => {
      if (!isAutenticado){
        router.navigateByUrl(PATH.LOGIN)
      }
    })
  )
};
