import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaNombresComponent } from "./lista-nombres/lista-nombres.component";
import { ImagenesComponent } from "./imagenes/imagenes.component";
import { InicioComponent } from "./inicio/inicio.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListaNombresComponent, ImagenesComponent, InicioComponent]
})
export class AppComponent {
  title = 'proyecto-clase';
}
