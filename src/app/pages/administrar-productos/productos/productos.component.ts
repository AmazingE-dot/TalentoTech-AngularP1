import { Component, Inject, OnInit, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductosService } from '../../../services/productos/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH } from '../../../core/enum/path.enum';
import { Observable, map } from 'rxjs';
import { TableComponent } from '../../../components/table/table.component';
import { ProductoInterface } from '../../../core/interface/products.interface';
import { ProductosModel } from '../../../core/models/producto.models';

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

  productosResolver: any;

  titulo: string = 'Lista de Productos';
  columnas: string[] = [];
  informacion: ProductosModel | undefined;

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private productosService = inject(ProductosService);

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.activatedRoute.data.subscribe(({ productos }) => {
      this.misProductos = productos;
    });

    this.obtenerColumnas(this.misProductos);
  }

  resumenDeProducto(producto: ProductosModel): ProductoInterface {
    return {
      nombre: producto.nombre,
      SKU: producto.SKU,
      cantidad: producto.cantidad,
      precio: producto.precio,
      createdAt: producto.createdAt,
    };
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos?.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: ProductoInterface) {
    this.informacion = this.productos.find(
      (producto) => producto.SKU === data.SKU
    );

    if (this.informacion) {
      Swal.fire({
        title: 'Información',
        html: `<ul>
              <li> <b>Nombre: </b>${this.informacion.nombre}</li>

              <li> <b>SKU: </b>${this.informacion.SKU}</li>

              <li> <b>Precio: </b>${this.informacion.precio}</li>

              <li> <b>Cantidad: </b>${this.informacion.cantidad}</li>

              <li> <b>Nombre Distribuidor: </b>${this.informacion.distribuidor.razonSocial}</li>

              <li> <b>Dirección Distribuidor: </b>${this.informacion.distribuidor.direccion}</li>

              <li> <b>Telefono del Distribuidor: </b>${this.informacion.distribuidor.telefono}</li>

              <li> <b>Usuario que registró: </b>${this.informacion.usuario.nombre}</li>

              <li> <b>Calificación: </b>${this.informacion.opiniones?.calificacion}</li>

            </ul>`,
        icon: 'success',
      });
    }
  }

  crearProductos() {
    this.router.navigateByUrl(`${PATH.CREAR_PRODUCTOS}`);
  }

  eliminar(data: ProductosModel){
    this.productosService.eliminarProductos(data._id).subscribe(
      (resp: any) => {
        Swal.fire(
          'Producto eliminado', `${resp.msg}`, 'success'
        );
        this.cargarProductos();
      }
    );
  }
}
