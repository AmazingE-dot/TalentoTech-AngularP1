import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from '../../core/interface/products.interface';
import { TableComponent } from "../../components/table/table.component";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [TableComponent]
})
export class ProductosComponent implements OnInit{
  misProductos: ProductoInterface[] = [];
  titulo: string = 'Lista de productos';
  columnas: string[] = [
    'nombre',
    'cantidad',
    'precio',
    'sku',
  ];
  informacion: any;

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
    this.obtenerColumnas(this.misProductos);
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: any){
    Swal.fire({
      title: data.nombre,
      html:
      `
      <div>Cantidad: ${data.cantidad}</div>
      <br>
      <div>Total: ${data.precio}</div>
      <br>
      <div>Codigo SKU: ${data.sku}</div>
      `,
      icon: "success"
    });
    this.informacion = data
  }
}
