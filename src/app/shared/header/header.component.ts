import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuRoutes } from '../../core/menu/menu';
import { MenuInfoInterface } from '../../core/interface/menu_info.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuItems:MenuInfoInterface[] = [];

  ngOnInit(): void {
    this.menuItems = MenuRoutes
  }
}
