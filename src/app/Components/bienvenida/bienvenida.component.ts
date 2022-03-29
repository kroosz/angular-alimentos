import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DetalleAlimento } from 'src/app/Interfaces/alimentos.interface';
import { PlatillosService } from 'src/app/Services/Platillos/platillos.service';
import { IdAlimento } from 'src/app/Interfaces/alimentos.interface';
import { identificadorPlatillo } from 'src/app/Estados/Acciones/platillos.actions';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  // TODO: VARIABLES GENERALES
  srcImage = '';
  titulo = '';
  id = '';

  estadoMenu = '';

  constructor(
    private pla: PlatillosService,
    private store: Store,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerPlatillo();
  }
  obtenerPlatillo(): void {
    this.pla.obtenerPlatillosRandom().subscribe((res) => {
      const meal: Array<DetalleAlimento> = res.meals;
      this.srcImage = meal[0].strMealThumb;
      this.titulo = meal[0].strMeal;
      this.id = meal[0].idMeal;
    })
  }
  cambiarTamanioMenu(evt: string): void {
    this.estadoMenu = evt;
  }
  verDetalle(): void {
    const idAlimento: Array<IdAlimento> = [{idMeal: this.id}];
    this.store.dispatch(identificadorPlatillo({idAlimento}));
    this.router.navigate(['/detalle-platillo']);
  }
}
