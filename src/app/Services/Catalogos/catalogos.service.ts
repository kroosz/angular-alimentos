import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urls } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(
    private http: HttpClient
  ) { }
  obtenerAreas(): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}list.php?a=list`);
  }
  obtenerIngredientes(): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}list.php?i=list`);
  }
  obtenerCategorias(): Observable<any> {
    return this.http.get<any>(`${urls.urlBack}list.php?c=list`);
  }
}
