import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PlatillosService } from 'src/app/Services/Platillos/platillos.service';
import { CatalogosService } from 'src/app/Services/Catalogos/catalogos.service';
import { IdAlimento } from 'src/app/Interfaces/alimentos.interface';
import { identificadorPlatillo } from 'src/app/Estados/Acciones/platillos.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IngredientesService } from 'src/app/Services/Ingredientes/ingredientes.service';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss']
})
export class PlatillosComponent implements OnInit {

  // TODO: VARIABLES TABLA
  displayedColumns: string[] = ['id', 'nombre'];
  dataSource!: MatTableDataSource<any>;
  tamanioTabla = 0;
  @ViewChild('paginator1', {static: true}) paginator1!: MatPaginator;

  // TODO: VARIABLES GENERALES
  alimentos: Array<any> = [];
  estadoMenu = '';
  idCarousel = 0;

  area = '';
  categorias = '';
  ingredientes = '';

  // TODO: CATALOGOS
  catAreas: Array<any> = [];
  catCategorias: Array<any> = [];
  catIngredientes: Array<any> = [];

  constructor(
    private pla: PlatillosService,
    private cat: CatalogosService,
    private router: Router,
    private store: Store,
    private ing: IngredientesService
  ) { }

  ngOnInit(): void {
    this.obtenerCatalogos();
    this.obtenerAleatorios();
    this.obtenerPlatillos();
    setInterval(() => {
      this.obtenerAleatorios();
    }, 300000)
  }
  obtenerCatalogos(): void {
    this.cat.obtenerAreas().subscribe((res) => {
      this.catAreas = res.meals;
    });
    this.cat.obtenerCategorias().subscribe((res) => {
      this.catCategorias = res.meals
    });
    this.ing.obtenerIngredientesPopulares().subscribe((res) => {
      this.catIngredientes = res.meals;
    });
  }
  obtenerAleatorios(): void {
    this.alimentos = [];
    switch(this.idCarousel) {
      case 0:
        this.idCarousel = 1;
        this.pla.obtenerPlatillos().subscribe((res) => {
          this.alimentos.push(res.meals[0]);
          this.alimentos.push(res.meals[2]);
          this.alimentos.push(res.meals[4]);
          this.alimentos.push(res.meals[3]);
          this.alimentos.push(res.meals[8]);
        });
        break;
      case 1:
        this.idCarousel = 2;
        this.pla.obtenerPlatillos().subscribe((res) => {
          this.alimentos.push(res.meals[1]);
          this.alimentos.push(res.meals[3]);
          this.alimentos.push(res.meals[5]);
          this.alimentos.push(res.meals[4]);
          this.alimentos.push(res.meals[9]);
        });
        break;
      case 2:
        this.idCarousel = 0;
        this.pla.obtenerPlatillos().subscribe((res) => {
          this.alimentos.push(res.meals[2]);
          this.alimentos.push(res.meals[4]);
          this.alimentos.push(res.meals[6]);
          this.alimentos.push(res.meals[7]);
          this.alimentos.push(res.meals[1]);
        });
        break;
    }
  }
  obtenerPlatillos(): void {
    this.pla.obtenerPlatillos().subscribe((res) => {
      const platillos: Array<any> = res.meals;
      this.dataSource = new MatTableDataSource(platillos);
      this.tamanioTabla = this.dataSource.data.length;
      this.dataSource.paginator = this.paginator1;
    });
  }
  filtrarTabla(id: number): void {
    switch(id) {
      case 1:
        this.pla.obtenerPlatillosArea(this.area).subscribe((res) => {
          const platillos: Array<any> = res.meals;
          this.dataSource = new MatTableDataSource(platillos);
          this.tamanioTabla = this.dataSource.data.length;
          this.dataSource.paginator = this.paginator1;
        });
        break;
      case 2:
        this.pla.obtenerPlatillosCategoria(this.categorias).subscribe((res) => {
          const platillos: Array<any> = res.meals;
          this.dataSource = new MatTableDataSource(platillos);
          this.tamanioTabla = this.dataSource.data.length;
          this.dataSource.paginator = this.paginator1;
        });
        break;
      case 3:
        this.ing.obtenerAlimentoPorIngrediente(this.ingredientes.replace(/ /g, "_").toLowerCase()).subscribe((res) => {
          const platillos: Array<any> = res.meals;
          this.dataSource = new MatTableDataSource(platillos);
          this.tamanioTabla = this.dataSource.data.length;
          this.dataSource.paginator = this.paginator1;
        });
        break;
    }
  }
  LimpiarFiltro(): void {
    this.area = '';
    this.categorias = '';
    this.ingredientes = '';
    this.obtenerPlatillos();
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
