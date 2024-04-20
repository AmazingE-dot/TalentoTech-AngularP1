import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-nombres',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-nombres.component.html',
  styleUrl: './lista-nombres.component.css'
})
export class ListaNombresComponent {

  listaNombres: string[] = [
    'Andrea', 'Eduardo', 'Carlos', 'Laura', 'Pepe'
  ]

}
