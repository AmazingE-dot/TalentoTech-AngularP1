import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { Routes } from '@angular/router';
import { ListaNombresComponent } from './pages/lista-nombres/lista-nombres.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PATH } from './core/enum/path.enum';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    children: [
      {
        path: PATH.INICIO,
        title: 'Inicio',
        component: InicioComponent,
      },
      {
        path: PATH.IMAGE,
        title: 'Lista de imagenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.NAME,
        title: 'Lista de nombres',
        component: ListaNombresComponent,
      },
      {
        path: PATH.ABOUT,
        title: 'Acerca de',
        component: AcercaDeComponent,
      },
      {
        path: PATH.CONTACT,
        title: 'Contacto',
        component: ContactoComponent,
      },
    ],
  },
];
