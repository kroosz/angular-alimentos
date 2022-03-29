import { createFeatureSelector} from '@ngrx/store';
import { NombreIngrediente } from 'src/app/Interfaces/ingredientes.interface';

export const nombreIngrediente = createFeatureSelector<ReadonlyArray<NombreIngrediente>>('ingrediente');