import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { personaInterface } from '../../core/interface/persona.interface';
import { TableComponent } from "../../components/table/table.component";

@Component({
    selector: 'app-lista-nombres',
    standalone: true,
    templateUrl: './lista-nombres.component.html',
    styleUrl: './lista-nombres.component.css',
    imports: [RouterLink, TableComponent]
})
export class ListaNombresComponent implements OnInit{
  personas: personaInterface[] = [];

  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Eduardo Leon',
        fechaNacimiento: new Date('1999-19-07'),
        tipoDocumento: 'Cédula de ciudadanía',
        numeroDocumento: '1234567890',
        numeroCelular: 321654987,
        email: 'correo@gmail.com',
        peso: '60kg',
      },
      {
        nombre: 'Andrea Alarcon',
        fechaNacimiento: new Date('2001-19-07'),
        tipoDocumento: 'Cédula de ciudadanía',
        numeroDocumento: '987654321',
        numeroCelular: 321456789,
        email: 'correo2@gmail.com',
        peso: '50kg',
      },
      {
        nombre: 'Juanito Ortega',
        fechaNacimiento: new Date('2001-23-02'),
        tipoDocumento: 'Tarjeta Identaidad',
        numeroDocumento: '789456123',
        numeroCelular: 321965874,
        email: 'correo3@gmail.com',
        peso: '54kg',
      }
    ];
    console.log(this.personas);
  }
}
