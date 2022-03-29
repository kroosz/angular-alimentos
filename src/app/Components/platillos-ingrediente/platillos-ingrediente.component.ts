import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { identificadorPlatillo } from 'src/app/Estados/Acciones/platillos.actions';
import { nombreIngrediente } from 'src/app/Estados/Selectores/ingredientes.selector';
import { AlimentosIngrediente, IdAlimento } from 'src/app/Interfaces/alimentos.interface';
import { IngredientesService } from 'src/app/Services/Ingredientes/ingredientes.service';

@Component({
  selector: 'app-platillos-ingrediente',
  templateUrl: './platillos-ingrediente.component.html',
  styleUrls: ['./platillos-ingrediente.component.scss']
})
export class PlatillosIngredienteComponent implements OnInit {

  // TODO: VARIABLES INICIALES
  alimentos: Array<AlimentosIngrediente> = [];
  estadoMenu: string = '';

  constructor(
    private store: Store,
    private ing: IngredientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerIngrediente();
  }
  obtenerIngrediente(): void {
    this.store.select(nombreIngrediente).subscribe((res) => {
      const {ingrediente} = res[0];
      const ingredienteReplace = ingrediente.replace(/ /g, "_").toLowerCase();
      this.ing.obtenerAlimentoPorIngrediente(ingredienteReplace).subscribe((res) => {
        this.alimentos = res.meals;
      });
    });
  }
  cambiarTamanioMenu(evt: string): void {
    this.estadoMenu = evt;
  }
  verDetalle(id: string): void {
    const idAlimento: Array<IdAlimento> = [{idMeal: id}];
    this.store.dispatch(identificadorPlatillo({idAlimento}));
    this.router.navigate(['/detalle-platillo']);
  }
}
