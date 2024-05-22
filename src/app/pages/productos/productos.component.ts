import { ProductosService } from './../../services/productos/productos.service';
import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import Swal from 'sweetalert2';
import { ProductosModel } from '../../models/productos.models';

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [TableComponent]
})
export class ProductosComponent implements OnInit{
  misProductos: ProductosModel[] = [];
  titulo: string = 'Lista de productos';
  columnas: string[] = [
    'nombre',
    'cantidad',
    'precio',
    'sku',
  ];

  ProductosService = inject(ProductosService)

  informacion: any;

  ngOnInit(): void {
    this.obtenerColumnas(this.misProductos);
    this.ProductosService.getProductos().subscribe((resp: any) => {
      this.misProductos = resp.productos;
      this.obtenerColumnas(this.misProductos);
    });
  }

  obtenerColumnas(productos: ProductosModel[]) {
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
