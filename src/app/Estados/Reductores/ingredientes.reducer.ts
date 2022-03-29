import { createReducer, on } from '@ngrx/store';
import { NombreIngrediente } from 'src/app/Interfaces/ingredientes.interface';
import { nombreIngrediente } from '../Acciones/ingredientes.actions';

export const initialState: ReadonlyArray<NombreIngrediente> = [];

export const ingredienteReducer = createReducer(
    initialState,
    on(nombreIngrediente, (oldState, {ingrediente}) => {
        return [...ingrediente]
    })
)