import { createReducer, on } from '@ngrx/store';
import { IdAlimento } from 'src/app/Interfaces/alimentos.interface';
import { identificadorPlatillo } from '../Acciones/platillos.actions';

export const initialState: ReadonlyArray<IdAlimento> = [];

export const idAlimentoReducer = createReducer(
    initialState,
    on(identificadorPlatillo, (oldState, {idAlimento}) => {
        return [...idAlimento]
    })
)