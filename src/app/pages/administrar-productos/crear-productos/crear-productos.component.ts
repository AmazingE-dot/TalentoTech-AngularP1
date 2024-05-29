import { ProductosService } from './../../../services/productos/productos.service';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  CrearProductoInterface,
  ProductoInterface,
} from '../../../core/interface/products.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-productos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-productos.component.html',
  styleUrl: './crear-productos.component.css',
})
export class CrearProductosComponent implements OnInit {
  productoForm: FormGroup;

  private formBuilder = inject(FormBuilder);
  private ProductosService = inject(ProductosService);

  ngOnInit(): void {
    this.productoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      SKU: ['', [Validators.required]],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      nit: ['', []],
      razonSocial: ['', []],
      telefono: ['', []],
      direccion: ['', []],
    });
  }

  crearProducto() {
    const data = this.productoForm.value;
    const nuevoProducto: CrearProductoInterface = {
      nombre: data.nombre,
      SKU: data.SKU,
      cantidad: data.cantidad,
      precio: data.precio,
      distribuidor: {
        nit: data.nit,
        razonSocial: data.razonSocial,
        telefono: data.telefono,
        direccion: data.direccion,
      },
    };

    this.ProductosService.crearProductos(nuevoProducto).subscribe(
      (resp: any) => {
        Swal.fire(
          'Producto creado', `${resp.msg}`, 'success'
        )
        this.resetFormulario();
      }
    );
  }

  resetFormulario(){
    this.productoForm.reset();
  }
}
