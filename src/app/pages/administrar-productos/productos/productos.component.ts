import { ProductosService } from '../../../services/productos/productos.service';
import { Component, OnInit, inject } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import Swal from 'sweetalert2';
import { ProductosModel } from '../../../models/producto.models';
import { ProductoInterface } from '../../../core/interface/products.interface';
import { Router } from '@angular/router';
import { PATH } from '../../../core/enum/path.enum';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TableComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoInterface[] = [];
  productos: ProductosModel[] = [];
  informacion: ProductosModel | undefined;

  titulo: string = 'Lista de productos';
  columnas: string[] = [];

  private ProductosService = inject(ProductosService);
  private router = inject(Router)

  ngOnInit(): void {
    this.ProductosService
    .getProductos()
    .subscribe(
      (productos: ProductosModel[]) => {
        this.productos = productos;
        this.misProductos = productos.map((producto) =>
          this.resumenProducto(producto)
        );

        this.obtenerColumnas(this.misProductos);
      }
    );
  }

  resumenProducto(producto: ProductosModel): ProductoInterface {
    return {
      nombre: producto.nombre,
      SKU: producto.SKU,
      precio: producto.precio,
      cantidad: producto.cantidad,
      createdAt: producto.createdAt,
    };
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos?.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: ProductoInterface) {

    this.informacion = this.productos.find((producto) => producto.SKU === data.SKU)

    if (this.informacion){
      Swal.fire({
        title: this.informacion.nombre,
        html: `
        <div>Codigo SKU: ${this.informacion.SKU}</div>
        <br>
        <div>Cantidad: ${this.informacion.cantidad}</div>
        <br>
        <div>Distribuidor: ${this.informacion.distribuidor.razonSocial}</div>
        <br>
        <div>Distribuidor NIT: ${this.informacion.distribuidor.nit}</div>
        <br>
        <div>Distribuidor TEL: ${this.informacion.distribuidor.telefono}</div>
        <br>
        <div>Opiniones: ${this.informacion.opiniones?.comentarios}</div>
        <br>
        <div>Puntuación: ${this.informacion.opiniones?.calificacion}</div>
        <br>
        <div>Total: ${this.informacion.precio}</div>
        `,
        icon: 'success',
      });
    }
  }
  crearProductos(){
    this.router.navigateByUrl(`${PATH.CREAR_PRODUCTOS}`)
  }
}
