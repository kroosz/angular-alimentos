import { createAction, props } from '@ngrx/store';
import { DatosUsuario } from 'src/app/Interfaces/login.interface';

export const datosUsuario = createAction(
    '[when login] when login success',
    props<{ usuario: ReadonlyArray<DatosUsuario> }>()
)