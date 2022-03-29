import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlatillosService } from 'src/app/Services/Platillos/platillos.service';
import { idAlimentoSelector } from 'src/app/Estados/Selectores/platillos.selector';
import { DetalleAlimento } from 'src/app/Interfaces/alimentos.interface';

@Component({
  selector: 'app-detalle-platillo',
  templateUrl: './detalle-platillo.component.html',
  styleUrls: ['./detalle-platillo.component.scss']
})
export class DetallePlatilloComponent implements OnInit {

  // TODO: VARIABLES GENERALES
  srcImagen: string = '';
  titulo: string = '';
  estadoMenu = '';

  ingrediente1 = '';
  ingrediente2 = '';
  ingrediente3 = '';
  ingrediente4 = '';
  ingrediente5 = '';
  ingrediente6 = '';
  ingrediente7 = '';
  ingrediente8 = '';
  ingrediente9 = '';
  ingrediente10 = '';
  ingrediente11 = '';
  ingrediente12 = '';
  ingrediente13 = '';
  ingrediente14 = '';
  ingrediente15 = '';
  ingrediente16 = '';
  ingrediente17 = '';
  ingrediente18 = '';
  ingrediente19 = '';
  ingrediente20 = '';

  medida1 = '';
  medida2 = '';
  medida3 = '';
  medida4 = '';
  medida5 = '';
  medida6 = '';
  medida7 = '';
  medida8 = '';
  medida9 = '';
  medida10 = '';
  medida11 = '';
  medida12 = '';
  medida13 = '';
  medida14 = '';
  medida15 = '';
  medida16 = '';
  medida17 = '';
  medida18 = '';
  medida19 = '';
  medida20 = '';

  instrucciones = '';
  srcVideo = '';

  constructor(
    private pla: PlatillosService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.obtenerDetalle();
  }
  obtenerDetalle(): void {
    this.store.select(idAlimentoSelector).subscribe((res) => {
      const {idMeal} = res[0];
      this.pla.obtenerPlatilloPorId(idMeal).subscribe((res) => {
        console.log(res.meals[0]);
        const detalle: Array<DetalleAlimento> = res.meals;
        this.srcImagen = detalle[0].strMealThumb;
        this.titulo = detalle[0].strMeal;
        this.ingrediente1 = detalle[0].strIngredient1;
        this.ingrediente2 = detalle[0].strIngredient2;
        this.ingrediente3 = detalle[0].strIngredient3;
        this.ingrediente4 = detalle[0].strIngredient4;
        this.ingrediente5 = detalle[0].strIngredient5;
        this.ingrediente6 = detalle[0].strIngredient6;
        this.ingrediente7 = detalle[0].strIngredient7;
        this.ingrediente8 = detalle[0].strIngredient8;
        this.ingrediente9 = detalle[0].strIngredient9;
        this.ingrediente10 = detalle[0].strIngredient10;
        this.ingrediente11 = detalle[0].strIngredient11;
        this.ingrediente12 = detalle[0].strIngredient12;
        this.ingrediente13 = detalle[0].strIngredient13;
        this.ingrediente14 = detalle[0].strIngredient14;
        this.ingrediente15 = detalle[0].strIngredient15;
        this.ingrediente16 = detalle[0].strIngredient16;
        this.ingrediente17 = detalle[0].strIngredient17;
        this.ingrediente18 = detalle[0].strIngredient18;
        this.ingrediente19 = detalle[0].strIngredient19;
        this.ingrediente20 = detalle[0].strIngredient20;
        this.medida1 = detalle[0].strMeasure1;
        this.medida2 = detalle[0].strMeasure2;
        this.medida3 = detalle[0].strMeasure3;
        this.medida4 = detalle[0].strMeasure4;
        this.medida5 = detalle[0].strMeasure5;
        this.medida6 = detalle[0].strMeasure6;
        this.medida7 = detalle[0].strMeasure7;
        this.medida8 = detalle[0].strMeasure8;
        this.medida9 = detalle[0].strMeasure9;
        this.medida10 = detalle[0].strMeasure10;
        this.medida11 = detalle[0].strMeasure11;
        this.medida12 = detalle[0].strMeasure12;
        this.medida13 = detalle[0].strMeasure13;
        this.medida14 = detalle[0].strMeasure14;
        this.medida15 = detalle[0].strMeasure15;
        this.medida16 = detalle[0].strMeasure16;
        this.medida17 = detalle[0].strMeasure17;
        this.medida18 = detalle[0].strMeasure18;
        this.medida19 = detalle[0].strMeasure19;
        this.medida20 = detalle[0].strMeasure20;
        this.instrucciones = detalle[0].strInstructions;
        this.srcVideo = detalle[0].strYoutube.replace('/watch?', '/embed/').replace('v=', '');
      })
    })
  }
  cambiarTamanioMenu(evt: string): void {
    this.estadoMenu = evt;
  }
}
