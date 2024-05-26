import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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

  ngOnInit(): void {
    this.productoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      SKU: ['', [Validators.required]],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      nit: ['', []],
      razonSocial: ['', []],
      telefono: ['', []],
      direccion: ['', []]
    });
  }

  crearProducto(){
    console.log(this.productoForm.value)
  }

}
