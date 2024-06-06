import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { personaInterface } from '../../../core/interface/persona.interface';
import { TableComponent } from '../../../components/table/table.component';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { UsuarioModel } from '../../../core/models/usuario.models';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { PATH } from '../../../core/enum/path.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  imports: [TableComponent],
})
export class UsuariosComponent implements OnInit, OnDestroy {
  usuarios: UsuarioModel[] = [];
  columnas: string[] = [];
  informacion: UsuarioModel;

  usuarioSubscription: Subscription;

  private usuarioService = inject(UsuariosService);
  private router = inject(Router);

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe();
  }

  cargarUsuarios() {
    this.usuarioSubscription = this.usuarioService
      .getUsuarios()
      .subscribe((resp: any) => {
        this.usuarios = resp.usuarios;
        this.obtenerColumnas(this.usuarios);
      });
  }

  obtenerColumnas(usuarios: UsuarioModel[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
    }
  }

  recibirInformacion(data: UsuarioModel) {
    this.informacion = data;
    Swal.fire({
      title: 'Información',
      html: `<ul>
              <li> <b>Nombre: </b>${this.informacion.nombre}</li>

              <li> <b>Email: </b>${this.informacion.email}</li>

              <li> <b>Tipo de Documento: </b>${this.informacion.tipoDocumento}</li>

              <li> <b>Numero de Documento: </b>${this.informacion.numeroDocumento}</li>
            </ul>`,
      icon: 'success',
    });
  }

  irAcrearUsuarios() {
    this.router.navigateByUrl(`${PATH.CREAR_USUARIO}/nuevo`);
  }

  editarUsuario(data: any) {
    console.log(data);

    this.router.navigateByUrl(`${PATH.CREAR_USUARIO}/${data._id}`);
  }

  eliminarUsuario(data: UsuarioModel) {
    this.usuarioService.deleteUsuario(data._id).subscribe({
      next: async (res: any) => {
        Swal.fire(
          'Usuario',
          `El usuario ${data.nombre} ha sido eliminado con éxito`,
          'warning'
        );
        await this.cargarUsuarios();
      },
      error: (error) => {
        Swal.fire('Error', `${error.error.msg}`, 'error');
      },
    });
  }
}
