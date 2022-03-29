import { createAction, props } from '@ngrx/store';
import { NombreIngrediente } from 'src/app/Interfaces/ingredientes.interface';

export const nombreIngrediente = createAction(
    '[ver platillos] ver platillos ingrediente',
    props<{ ingrediente: ReadonlyArray<NombreIngrediente> }>()
)