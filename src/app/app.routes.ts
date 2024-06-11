import { Routes, CanActivateFn } from '@angular/router';
import { PATH } from './core/enum/path.enum';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ListaNombresComponent } from './pages/lista-nombres/lista-nombres.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { UsuariosComponent } from './pages/administrar-usuarios/usuarios/usuarios.component';
import { ProductosComponent } from './pages/administrar-productos/productos/productos.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';
import { CrearProductosComponent } from './pages/administrar-productos/crear-productos/crear-productos.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { productosResolver } from './core/resolvers/productos/productos.resolver';
import { CrearUsuariosComponent } from './pages/administrar-usuarios/crear-usuarios/crear-usuarios.component';


export const routes: Routes = [
  {
    path: PATH.LOGIN,
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: `${PATH.CREAR_USUARIO}/:id`,
    title: 'Crear usuarios',
    component: CrearUsuariosComponent,
  },
  {
    path: PATH.HOME,
    title: 'Home',
    canActivate: [authGuard],
    children: [
      {
        path: PATH.INICIO,
        title: 'Inicio',
        component: InicioComponent,
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
      {
        path: PATH.USUARIOS,
        title: 'Usuarios',
        component: UsuariosComponent,
      },
      {
        path: PATH.PRODUCTS,
        title: 'Productos',
        component: ProductosComponent,
        resolve: {
          productos: productosResolver,
        }
      },
      {
        path: PATH.CREAR_PRODUCTOS,
        title: 'Productos',
        component: CrearProductosComponent,
      },
      {
        path: PATH.TASKS,
        title: 'Tasks',
        component: ListaTareasComponent,
      },
    ],
  },
];
