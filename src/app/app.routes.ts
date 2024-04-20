import { Routes } from '@angular/router';
import { ListaNombresComponent } from './lista-nombres/lista-nombres.component';
import { InicioComponent } from './inicio/inicio.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

export const routes: Routes = [

  {
    path: 'ListaNombres',
    title: 'lista de nombres',
    component: ListaNombresComponent
  },
  {
    path: 'Imagenes',
    title: 'lista de imágenes',
    component: ImagenesComponent
  },
];
