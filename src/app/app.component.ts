import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { CompMultimediaComponent } from "./comp-multimedia/comp-multimedia.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InicioComponent, CompMultimediaComponent]
})
export class AppComponent {
  title = 'proyecto-clase';
  nombre:string = "Eduardo"
}
