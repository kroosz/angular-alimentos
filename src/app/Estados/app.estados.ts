import { ActionReducerMap } from '@ngrx/store'
import { DatosUsuario } from "../Interfaces/login.interface";
import { NombreIngrediente } from '../Interfaces/ingredientes.interface';

import { datosUsuarioReducer } from "./Reductores/login.reducer";
import { ingredienteReducer } from './Reductores/ingredientes.reducer';
import { IdAlimento } from '../Interfaces/alimentos.interface';
import { idAlimentoReducer } from './Reductores/platillos.reducer';

export interface AppState {
    usuario: ReadonlyArray<DatosUsuario>;
    ingrediente: ReadonlyArray<NombreIngrediente>;
    idAlimento: ReadonlyArray<IdAlimento>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    usuario: datosUsuarioReducer,
    ingrediente: ingredienteReducer,
    idAlimento: idAlimentoReducer
}