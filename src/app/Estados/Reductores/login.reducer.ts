import { createReducer, on } from '@ngrx/store';
import { DatosUsuario } from 'src/app/Interfaces/login.interface';
import { datosUsuario } from '../Acciones/login.actions';

export const initialState: ReadonlyArray<DatosUsuario> = [];

export const datosUsuarioReducer = createReducer(
    initialState,
    on(datosUsuario, (oldState, {usuario}) => {
        return [...usuario]
    })
)