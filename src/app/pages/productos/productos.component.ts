import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from '../../core/interface/products.interface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{
  misProductos: ProductoInterface[] = []
  ngOnInit(): void {
    this.misProductos = [
      {
        nombre: 'Leche',
        cantidad: 1,
        precio: 3900,
        sku: 'SAO210SP',
      },
      {
        nombre: 'HUEVOS',
        cantidad: 12,
        precio: 13900,
        sku: 'SAOASC21P',
      },
      {
        nombre: 'Camisa',
        cantidad: 1,
        precio: 40000,
        sku: 'AAP20193Z',
      },
      {
        nombre: 'Pantalon',
        cantidad: 2,
        precio: 79900,
        sku: 'PANT201990',
      },
    ];
  }
}
