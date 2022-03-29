import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logeado = false;

  constructor() { }

  iniciarSesion(user: string, pass: string): Observable<any> {
    let respuesta: Array<any> | undefined = undefined;
    if (user === 'user' && pass === 'root') {
      respuesta = [{success: true}];
    } else if (user === 'user' && pass !== 'root') {
      respuesta = [{success: false, msg: 'Contraseña Incorrecta'}];
    } else if (user !== 'user') {
      respuesta = [{success: false, msg: 'Usuario Incorrecto'}];
    }
    return of(respuesta);
  }
}
