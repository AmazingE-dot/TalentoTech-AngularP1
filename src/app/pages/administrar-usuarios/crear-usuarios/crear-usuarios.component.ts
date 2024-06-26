import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { crearUsuarioInterface } from '../../../core/interface/usuario.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH } from '../../../core/enum/path.enum';
import { UsuarioModel } from '../../../core/models/usuario.models';

@Component({
  selector: 'app-crear-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-usuarios.component.html',
  styleUrl: './crear-usuarios.component.css',
})
export class CrearUsuariosComponent implements OnInit, OnDestroy {
  usuariosForm: FormGroup;
  usuarioSubscription: Subscription;
  usuarioSeleccionado: UsuarioModel;

  private formBuilder = inject(FormBuilder);
  private usauriosService = inject(UsuariosService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.buscarUsuario(id);
    });

    this.crearFormulario();
  }

  ngOnDestroy(): void {
    return;
  }

  crearFormulario() {
    this.usuariosForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      tipoDocumento: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required]],
      peso: ['', []],
    });
  }

  buscarUsuario(numeroDocumento: string) {
    if (numeroDocumento !== 'nuevo') {
      this.usauriosService.getUnUsuario(numeroDocumento).subscribe({
        next: (res: any) => {
          const {
            nombre,
            tipoDocumento,
            numeroDocumento,
            email,
            rol,
            peso,
            fechaNacimiento,
          } = res.usuario;

          this.usuarioSeleccionado = res.usuario;

          Swal.fire(
            'Usuario',
            `Se encontró el usuario ${res.usuario.nombre}`,
            'info'
          );

          this.usuariosForm.setValue({
            nombre,
            email,
            tipoDocumento,
            numeroDocumento,
            rol,
            peso,
            fechaNacimiento,
          });
        },

        error: (error: any) => {
          Swal.fire('Error', 'Error al encontrar el usuario', 'error');
        },
      });
    }
  }

  crearUsuario() {
    if (!this.usuariosForm.valid) {
      Swal.fire('Crear usuario', 'POr favor complete el formulario', 'info');
    }

    const data = this.usuariosForm.value;
    const usuarioNuevo: crearUsuarioInterface = {
      nombre: data.nombre,
      email: data.email,
      password: data.password,
      tipoDocumento: data.tipoDocumento,
      numeroDocumento: data.numeroDocumento,
      peso: data.peso,
      fechaNacimiento: data.fechaNacimiento,
    };

    if (this.usuarioSeleccionado) {
      this.actualizarUsuario(usuarioNuevo);
    } else {
      this.usauriosService.crearUsuario(usuarioNuevo).subscribe({
        next: (res: any) => {
          Swal.fire(
            'Usuario',
            `El usuario ${data.nombre} ha sido creado con éxito`,
            'success'
          );
        },
        error: (error) => {
          console.log("El error es el siguiente", error);

          Swal.fire('Error', `${error.error.msg}`, 'error');
        },
      });
    }
  }

  actualizarUsuario(usuario: crearUsuarioInterface) {
    const usuarioActualizar: UsuarioModel = {
      _id: this.usuarioSeleccionado._id,
      nombre: usuario.nombre,
      email: usuario.email,
      tipoDocumento: usuario.tipoDocumento,
      numeroDocumento: usuario.numeroDocumento,
      rol: usuario.rol ? usuario.rol : '',
      peso: usuario.peso,
      fechaNacimiento: usuario.fechaNacimiento,
    };

    this.usauriosService.actualizarUsuario(usuarioActualizar).subscribe({
      next: (res: any) => {
        Swal.fire(
          'Usaurio Actualizado',
          `El usuario ${this.usuarioSeleccionado.nombre} ha sido actualizado con éxito`,
          'success'
        );
        this.router.navigateByUrl(PATH.USUARIOS);
      },
      error: (error) => {
        Swal.fire('Error', `${error.error.msg}`, 'error');
      },
    });
  }
}
