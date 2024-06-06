import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuRoutes } from '../../core/menu/menu';
import { MenuInfoInterface } from '../../core/interface/menu_info.interface';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { RolDirective } from '../../core/directive/rol/rol.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RolDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuItems: MenuInfoInterface[] = [];

  private usuarioServices = inject(UsuariosService);

  ngOnInit(): void {
    this.menuItems = MenuRoutes;
  }

  cerrarSesion() {
    this.usuarioServices.logout();
  }
}
