import { Component, OnInit, inject } from '@angular/core';
import { personaInterface } from '../../core/interface/persona.interface';
import { TableComponent } from "../../components/table/table.component";
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { UsuarioModel } from '../../models/usuario.models';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  imports: [TableComponent],
})
export class UsuariosComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  tituloTabla: string = 'Lista de usuarios';
  columnas: string[] = [
    'nombre',
    'fechaNacimiento',
    'tipoDocumento',
    'numeroDocumento',
    'numeroCelular',
    'email',
    'peso',
  ];

  usuariosService = inject(UsuariosService)

  ngOnInit(): void {

    this.usuariosService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
      this.obtenerColumnas(this.usuarios);
    });
  }

  obtenerColumnas(usuarios: UsuarioModel[]) {
    if (usuarios.length > 0) {
      this.columnas = Object.keys(usuarios[0]);
    }
  }
}
