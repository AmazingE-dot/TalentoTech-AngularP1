import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { Routes } from '@angular/router';
import { ListaNombresComponent } from './pages/lista-nombres/lista-nombres.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path: 'Inicio',
    title: 'Home',
    children: [
      {
        path: 'Inicio',
        title: 'Inicio',
        component: InicioComponent,
      },
      {
        path: 'Imagenes',
        title: 'Lista de imagenes',
        component: ImagenesComponent,
      },
      {
        path: 'ListaNombres',
        title: 'Lista de nombres',
        component: ListaNombresComponent,
      },
      {
        path: 'Acerca',
        title: 'Acerca de',
        component: AcercaDeComponent,
      },
      {
        path: 'Contacto',
        title: 'Contacto',
        component: ContactoComponent,
      },
    ],
  },
];
