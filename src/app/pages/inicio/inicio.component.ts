import { Opportunities } from './../../core/models/usuario.models';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../core/models/usuario.models';
import { Subscription } from 'rxjs';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent implements OnInit, OnDestroy {
  usuarios: UsuarioModel[] = [];
  totalInProgress: number = 0;
  totalLoseOpportunitie: number = 0;
  totalSuccessOpportunitie: number = 0;

  usuarioSubscription: Subscription;

  private usuarioService = inject(UsuariosService);


  ngOnInit(): void {
    this.cargarUsuarios();
    this.totalCalculo();
    console.log(this.usuarios);
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe();
  }

  cargarUsuarios() {
    this.usuarioSubscription = this.usuarioService
      .getUsuarios()
      .subscribe((resp: any) => {
        this.usuarios = resp.usuarios;
        this.totalCalculo();
      });
  }

  totalCalculo() {
    let totalPorcentaje = 0;
    let totalInProgress = 0;
    let totalLoseOpportunitie = 0;
    let totalSuccessOpportunitie = 0;

    for (const usuario of this.usuarios) {
      if (usuario.opportunities) {
        totalInProgress += Number(usuario.opportunities.inProgress);
        totalLoseOpportunitie += Number(usuario.opportunities.loseOpportunitie);
        totalSuccessOpportunitie += Number(usuario.opportunities.successOpportunitie);
      }
    }

    totalPorcentaje = totalInProgress + totalLoseOpportunitie + totalSuccessOpportunitie;

    if (totalPorcentaje > 0) {
      this.totalInProgress = (totalInProgress / totalPorcentaje) * 100;
      this.totalLoseOpportunitie = (totalLoseOpportunitie / totalPorcentaje) * 100;
      this.totalSuccessOpportunitie = (totalSuccessOpportunitie / totalPorcentaje) * 100;
    } else {
      this.totalInProgress = 0;
      this.totalLoseOpportunitie = 0;
      this.totalSuccessOpportunitie = 0;
    }

    console.log('Total In Suma:', totalPorcentaje);
  }

  abrirModal() {
    Swal.fire('SweetAlert2 is working!');
  }
}
