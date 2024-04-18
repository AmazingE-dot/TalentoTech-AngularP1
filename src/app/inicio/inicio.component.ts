import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  mostrarTitulo:boolean = true;

  personas = [{
    nombre: "eduardo",
    edad: 24,
    ciudad: "Bógota"
  },
  {
    nombre: "camilo",
    edad: 23,
    ciudad: "Huila"
  },
  {
    nombre: "andrea",
    edad: 21,
    ciudad: "Bógota"
  },
  {
    nombre: "Daniel",
    edad: 23,
    ciudad: "Bógota"
  },
  {
    nombre: "Camila",
    edad: 22,
    ciudad: "Medellin"
  }]
}
