import { createFeatureSelector} from '@ngrx/store';
import { DatosUsuario } from 'src/app/Interfaces/login.interface';

export const datosUsuario = createFeatureSelector<ReadonlyArray<DatosUsuario>>('usuario');