import { createFeatureSelector} from '@ngrx/store';
import { IdAlimento } from 'src/app/Interfaces/alimentos.interface';

export const idAlimentoSelector = createFeatureSelector<ReadonlyArray<IdAlimento>>('idAlimento');