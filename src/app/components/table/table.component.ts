import { Component, Input, OnInit } from '@angular/core';
import { personaInterface } from '../../core/interface/persona.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  @Input() personas: personaInterface[] = [];
  ngOnInit(): void {
    console.log('Personas en el equipo componente hijo', this.personas);
  }
}
