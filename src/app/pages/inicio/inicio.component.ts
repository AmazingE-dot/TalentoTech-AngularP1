import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  abrirModal(){
    Swal.fire('SweetAlert2 is working!');
  }
}
