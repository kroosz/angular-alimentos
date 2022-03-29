import { createAction, props } from '@ngrx/store';
import { IdAlimento } from 'src/app/Interfaces/alimentos.interface';

export const identificadorPlatillo = createAction(
    '[ver detalle] ver detalle alimento',
    props<{ idAlimento: ReadonlyArray<IdAlimento> }>()
)