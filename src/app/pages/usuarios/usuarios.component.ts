import { Component, OnInit } from '@angular/core';
import { personaInterface } from '../../core/interface/persona.interface';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
  imports: [TableComponent],
})
export class UsuariosComponent implements OnInit {
  usuarios: personaInterface[] = [];
  tituloTabla: string = 'Lista de usuarios';

  ngOnInit(): void {
    this.usuarios = [
      {
        nombre: 'Eduardo Leon Usuario',
        fechaNacimiento: new Date('1999-07-19'),
        tipoDocumento: 'Cédula de ciudadanía',
        numeroDocumento: '1234567890',
        numeroCelular: 321654987,
        email: 'correo@gmail.com',
        peso: '60kg',
      },
      {
        nombre: 'Andrea Alarcon Usuario',
        fechaNacimiento: new Date('2001-07-19'),
        tipoDocumento: 'Cédula de ciudadanía',
        numeroDocumento: '987654321',
        numeroCelular: 321456789,
        email: 'correo2@gmail.com',
        peso: '50kg',
      },
      {
        nombre: 'Juanito Ortega Usuario',
        fechaNacimiento: new Date('2001-03-02'),
        tipoDocumento: 'Tarjeta Identaidad',
        numeroDocumento: '789456123',
        numeroCelular: 321965874,
        email: 'correo3@gmail.com',
        peso: '54kg',
      },
    ];
  }
}
