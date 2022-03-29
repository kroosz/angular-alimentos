import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  constructor(
    private http: HttpClient
  ) { }
  obtenerIngredientesPopulares(): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}list.php?i=list`);
  }
  obtenerAlimentoPorIngrediente(ingrediente: string): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}filter.php?i=${ingrediente}`);
  }
}
