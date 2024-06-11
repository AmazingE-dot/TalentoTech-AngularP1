import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaNombresComponent } from "./pages/lista-nombres/lista-nombres.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListaNombresComponent, InicioComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'proyecto-clase';
}
