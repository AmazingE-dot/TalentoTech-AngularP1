import { Component, Input, OnInit, input } from '@angular/core';
import { personaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';
import { ProductoInterface } from '../../core/interface/products.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  @Input() data: any[] = [];
  @Input() titulo: string = '';
  @Input() columnas: string[] = [];

  ngOnInit(): void {
    console.log('Personas en el equipo componente hijo', this.data);
  }
}
