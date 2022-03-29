import { Component, OnInit, ViewChild } from '@angular/core';
import { IngredientesService } from 'src/app/Services/Ingredientes/ingredientes.service';
import { MatTableDataSource } from '@angular/material/table';
import { IngredientesPopulares, NombreIngrediente } from 'src/app/Interfaces/ingredientes.interface';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { nombreIngrediente } from 'src/app/Estados/Acciones/ingredientes.actions';

@Component({
  selector: 'app-ingredientes-populares',
  templateUrl: './ingredientes-populares.component.html',
  styleUrls: ['./ingredientes-populares.component.scss']
})
export class IngredientesPopularesComponent implements OnInit {

  // TODO: VARIABLES TABLA
  displayedColumns: string[] = ['id', 'nombre'];
  dataSource!: MatTableDataSource<IngredientesPopulares>;
  tamanioTabla = 0;
  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;

  // TODO: VARIABLES GENERALES
  estadoMenu: string = '';

  constructor(
    private ing: IngredientesService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.obtenerIngrediente();
  }
  obtenerIngrediente(): void {
    this.ing.obtenerIngredientesPopulares().subscribe((res) => {
      const ingredientes: Array<IngredientesPopulares> = res.meals;
      this.dataSource = new MatTableDataSource(ingredientes);
      this.tamanioTabla = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator1;
    });
  }
  cambiarTamanioMenu(evt: string): void {
    this.estadoMenu = evt;
  }
  verPlatillos(nombre: string): void {
    let nombIngrediente: Array<NombreIngrediente> = [];
    nombIngrediente = [{ingrediente: nombre}];
    this.store.dispatch(nombreIngrediente({ingrediente: nombIngrediente}));
    this.router.navigate(['/platillos-ingrediente']);
  }
}
