import { LoginInterface } from './../../core/interface/login.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { PATH } from '../../core/enum/path.enum';
import { UsuarioModel } from '../../models/usuario.models';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private router = inject(Router);

  usuario: UsuarioModel;

  constructor(private httpClient: HttpClient) {}

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  valdiateToken(): Observable<boolean> {
    return this.httpClient
      .get(`${base_url}/login`, {
        headers: {
          'x-token': this.token,
        },
      })
      .pipe(
        map((resp: any) => {
          const {
            id,
            nombre,
            email,
            tipoDocumento,
            numeroDocumento,
            createdAt,
            rol,
            peso,
            password,
            numeroCelular,
          } = resp.usuario;
          this.usuario = new UsuarioModel(
            id,
            nombre,
            email,
            tipoDocumento,
            numeroDocumento,
            createdAt,
            rol,
            peso,
            password,
            numeroCelular
          );
          localStorage.setItem('token', resp.token);
          return true;
        }),
        catchError((error) => {
          console.log(error);
          return of(false)
        })
      );
  }

  login(login: LoginInterface) {
    return this.httpClient.post(`${base_url}/login`, login).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl(PATH.LOGIN);
  }

  getUsuarios() {
    return this.httpClient.get(`${base_url}/usuario`);
  }
}
